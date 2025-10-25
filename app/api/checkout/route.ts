// app/api/checkout/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import axios from "axios";
import { z } from "zod";
import { createId } from "@paralleldrive/cuid2";

const WOMPI_API_URL = "https://sandbox.wompi.co/v1";

const checkoutSchema = z.object({
  items: z.array(
    z.object({
      productId: z.string(),
      quantity: z.number().min(1),
    })
  ).min(1),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = checkoutSchema.safeParse(body);

    if (!validation.success) {
      return new NextResponse("Invalid request body", { status: 400 });
    }

    const { items } = validation.data;
    const productIds = items.map((item) => item.productId);

    const productsInDb = await prisma.product.findMany({
      where: {
        id: { in: productIds },
      },
    });

    if (productsInDb.length !== productIds.length) {
      return new NextResponse("One or more products not found", { status: 404 });
    }

    let totalAmountInCents = 0;
    for (const item of items) {
      const product = productsInDb.find((p: { id: string }) => p.id === item.productId);
      if (product) {
        totalAmountInCents += product.price * item.quantity;
      }
    }

    const orderReference = `SOA-${createId()}`;

    const wompiCheckoutPayload = {
      amount_in_cents: totalAmountInCents,
      currency: "COP",
      reference: orderReference,
      public_key: process.env.WOMPI_PUBLIC_KEY, 
      redirect_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout-success?ref=${orderReference}`,
      customer_data: {
         email: "customer@example.com", // Placeholder
         full_name: "Test Customer",
         phone_number: "3001234567"
      }
    };

    const wompiResponse = await axios.post(
      `${WOMPI_API_URL}/checkouts`,
      wompiCheckoutPayload
    );

    const checkoutId = wompiResponse.data.data.id;
    const wompiCheckoutUrl = `https://sandbox.checkout.wompi.co/l/${checkoutId}`;

    return NextResponse.json({ url: wompiCheckoutUrl });

  } catch (error: unknown) {
    console.error("[CHECKOUT_POST_ERROR]", error instanceof Error ? error.message : "Unknown error");
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
