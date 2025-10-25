// components/refill-section.tsx
import { Button } from "@/components/ui/button";

export function RefillSection() {
  return (
    <section className="w-full bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          {/* You can use an img tag here if you have an image URL */}
           <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
             <span className="text-gray-500">Refill Image Placeholder</span>
           </div>
        </div>
        <div className="flex flex-col space-y-4">
          <h2 className="text-3xl font-bold">CO₂ Cylinder Refills</h2>
          <p className="text-lg text-gray-700">Never run out of bubbles.</p>
          <ul className="list-disc list-outside ml-5 space-y-2">
            <li>At-home service in Medellín & Bogotá.</li>
            <li>Return your empty cylinder when we deliver.</li>
            <li>Receive a full one instantly.</li>
            <li>Refill + delivery = $50.000 COP.</li>
          </ul>
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-green-600 text-white hover:bg-green-700 w-fit"
          >
            I need a refill
          </Button>
        </div>
      </div>
    </section>
  );
}
