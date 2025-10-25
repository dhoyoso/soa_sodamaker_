// components/sticky-buy-bar.tsx
"use client";

import { Button } from "@/components/ui/button";
import { useCheckout } from "@/hooks/use-checkout";
import { Product } from "@prisma/client";

export function StickyBuyBar({ product }: { product: Product }) {
  
  const { handleCheckout, isPending } = useCheckout();

  const onBuyNow = () => {
    handleCheckout({
      items: [{ productId: product.id, quantity: 1 }]
    });
  };

  return (
    <div className="hidden md:flex fixed bottom-0 left-0 w-full bg-yellow-400 text-black p-4 shadow-lg-top z-40 justify-between items-center">
      <div className="font-semibold">
        ⭐⭐⭐⭐⭐ Free shipping and 1-year warranty
      </div>
      <Button
        className="bg-black text-white font-bold hover:bg-gray-800"
        onClick={onBuyNow}
        disabled={isPending}
      >
        {isPending ? "Processing..." : "Buy Now"}
      </Button>
    </div>
  );
}
