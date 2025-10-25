// hooks/use-checkout.ts
"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type CheckoutPayload = {
  items: {
    productId: string;
    quantity: number;
  }[];
};

export const useCheckout = () => {
  const { mutate: handleCheckout, isPending } = useMutation({
    mutationFn: async (payload: CheckoutPayload) => {
      const { data } = await axios.post("/api/checkout", payload);
      return data;
    },
    onSuccess: (data) => {
      window.location.href = data.url;
    },
    onError: (error) => {
      console.error("Checkout error:", error);
      alert("Could not start checkout. Please try again.");
    },
  });

  return { handleCheckout, isPending };
};
