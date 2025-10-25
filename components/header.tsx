// components/header.tsx
"use client";

import { ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import Link from "next/link";

export default function Header() {
  const { openCart, getTotalItems } = useCartStore();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold text-teal-900">
          SOA Soda Maker
        </Link>
        <button
          onClick={openCart}
          className="relative rounded-full p-2 transition-colors hover:bg-gray-100"
          aria-label="Open cart"
        >
          <ShoppingBag className="h-6 w-6" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-xs font-bold text-black">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
