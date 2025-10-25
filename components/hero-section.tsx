// components/hero-section.tsx
"use client";

import { Product } from "@prisma/client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { useCheckout } from "@/hooks/use-checkout";

export function HeroSection({ product }: { product: Product }) {
  
  const { addItem } = useCartStore();
  const { handleCheckout, isPending } = useCheckout();

  const formattedPrice = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(product.price);

  const onBuyNow = () => {
    handleCheckout({
      items: [{ productId: product.id, quantity: 1 }]
    });
  };

  const onAddToCart = () => {
    addItem(product);
  };

  return (
    <section className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-16 px-6">
      <div className="w-full">
        <Carousel className="w-full max-w-md mx-auto">
          <CarouselContent>
            {product.images.map((imgUrl, index) => (
              <CarouselItem key={index}>
                <img
                  src={imgUrl}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-auto object-contain rounded-lg aspect-square"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:inline-flex" />
          <CarouselNext className="hidden md:inline-flex" />
        </Carousel>
      </div>

      <div className="flex flex-col space-y-5">
        <h1 className="text-4xl font-bold">
          {product.name} | SOA Soda Maker
        </h1>
        <p className="text-5xl font-bold text-gray-900">{formattedPrice}</p>
        
        <div className="flex items-center space-x-1">
          <Star className="text-yellow-400 fill-yellow-400" size={20} />
          <Star className="text-yellow-400 fill-yellow-400" size={20} />
          <Star className="text-yellow-400 fill-yellow-400" size={20} />
          <Star className="text-yellow-400 fill-yellow-400" size={20} />
          <Star className="text-yellow-400 fill-yellow-400" size={20} />
          <span className="ml-2 text-sm font-medium">{product.rating}/5</span>
        </div>

        <div>
          <span className="font-semibold text-lg">Color:</span> {product.color}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            variant="outline"
            className="w-full text-lg py-6"
            onClick={onAddToCart}
          >
            Add to Cart
          </Button>
          <Button
            id="main-buy-button"
            size="lg"
            className="bg-yellow-400 text-black font-bold text-lg hover:bg-yellow-500 w-full py-6"
            onClick={onBuyNow}
            disabled={isPending}
          >
            {isPending ? "Processing..." : "Buy Now"}
          </Button>
        </div>

        <h3 className="text-2xl font-semibold pt-4">
          IF YOU HAVE WATER, YOU HAVE SODA.
        </h3>
        <ul className="list-disc list-inside space-y-2 text-md">
          <li>Transforms water into soda in seconds.</li>
          <li>Save money compared to commercial sodas.</li>
          <li>Carbonate anything: tea, juice, wine, and more.</li>
        </ul>
      </div>
    </section>
  );
}
