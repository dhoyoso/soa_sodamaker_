// app/page.tsx
import { prisma } from "@/lib/prisma";
import { HeroSection } from "@/components/hero-section";
import { DeliverySection } from "@/components/delivery-section";
import { VideoSection } from "@/components/video-section";
import { RefillSection } from "@/components/refill-section";
import { FaqSection } from "@/components/faq-section";
import Footer from "@/components/footer";
import { StickyBuyBar } from "@/components/sticky-buy-bar";

// Force dynamic rendering to avoid build-time database connection
export const dynamic = 'force-dynamic';

export default async function HomePage() {
  // Fetch product data on the server
  const product = await prisma.product.findFirst({
    where: { brand: "SOA Soda Maker" },
  });

  if (!product) {
    return <div className="h-screen w-full flex items-center justify-center">Product not found. Please seed the database.</div>;
  }

  return (
    <main className="flex flex-col items-center bg-white text-gray-900">
      {/* Top announcement bar */}
      <div className="w-full bg-teal-900 text-white text-center py-2 text-sm font-medium">
        Free Shipping on our Soda Maker - 1 Year Warranty
      </div>

      <HeroSection product={product} />
      <DeliverySection />
      <VideoSection />
      <RefillSection />
      <FaqSection />
      <Footer />
      <StickyBuyBar product={product} />
    </main>
  );
}
