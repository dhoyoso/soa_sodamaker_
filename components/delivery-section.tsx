// components/delivery-section.tsx
import { Package, FileText, Truck } from "lucide-react";

export function DeliverySection() {
  return (
    <section className="w-full bg-teal-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">
          We deliver in 3 business days
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-col items-center">
            <div className="bg-white text-teal-900 rounded-full p-4 mb-3">
              <Package size={32} />
            </div>
            <h3 className="font-semibold text-lg">1. Order Placed</h3>
          </div>
          <div className="hidden md:block flex-1 h-0.5 bg-teal-300"></div>
          <div className="flex flex-col items-center">
            <div className="bg-white text-teal-900 rounded-full p-4 mb-3">
              <FileText size={32} />
            </div>
            <h3 className="font-semibold text-lg">2. Guide Generated</h3>
          </div>
          <div className="hidden md:block flex-1 h-0.5 bg-teal-300"></div>
          <div className="flex flex-col items-center">
            <div className="bg-white text-teal-900 rounded-full p-4 mb-3">
              <Truck size={32} />
            </div>
            <h3 className="font-semibold text-lg">3. Delivered</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
