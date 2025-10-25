// components/cart-sheet.tsx
"use client";

import { useCartStore } from "@/store/cart-store";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, ShoppingBag } from "lucide-react";
import { useCheckout } from "@/hooks/use-checkout";

export function CartSheet() {
  const { 
    items, 
    isOpen, 
    closeCart, 
    removeItem, 
    updateQuantity, 
    getTotalPrice 
  } = useCartStore();
  
  const { handleCheckout, isPending } = useCheckout();

  const formattedTotalPrice = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(getTotalPrice());

  const onCheckout = () => {
    const payload = {
      items: items.map(item => ({
        productId: item.product.id,
        quantity: item.quantity
      }))
    };
    handleCheckout(payload);
  };

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="px-6">
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        
        {items.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center gap-4">
            <ShoppingBag className="h-16 w-16 text-gray-300" />
            <p className="text-gray-500">Your cart is empty.</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6">
              <div className="flex flex-col gap-4">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex items-center gap-4">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="h-20 w-20 rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold">{product.name}</h3>
                      <p className="text-sm text-gray-700">
                        {new Intl.NumberFormat("es-CO", {
                          style: "currency",
                          currency: "COP",
                          maximumFractionDigits: 0,
                        }).format(product.price)}
                      </p>
                    </div>
                    <Input
                      type="number"
                      min={1}
                      value={quantity}
                      onChange={(e) => updateQuantity(product.id, parseInt(e.target.value) || 1)}
                      className="w-16"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => removeItem(product.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <SheetFooter className="mt-auto border-t bg-white p-6">
              <div className="flex w-full flex-col gap-4">
                <div className="flex justify-between font-semibold">
                  <span>Subtotal</span>
                  <span>{formattedTotalPrice}</span>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-500"
                  onClick={onCheckout}
                  disabled={isPending}
                >
                  {isPending ? "Processing..." : "Proceed to Checkout"}
                </Button>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
