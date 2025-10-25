// components/faq-section.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  const faqs = [
    { q: "How do cylinder refills work?", a: "We offer an at-home exchange service..." },
    { q: "How long does a CO₂ cylinder last?", a: "One cylinder carbonates up to 60 liters of water..." },
    { q: "How much does my refill cost?", a: "The refill exchange service costs $50.000 COP..." },
    { q: "How long does shipping take and cost?", a: "Shipping for the SOA Soda Maker is FREE nationwide (1-3 business days)." },
    { q: "Does the product have a warranty?", a: "Yes, all our Soda Makers come with a 1-year warranty." },
  ];

  return (
    <section className="w-full max-w-3xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Clear bubbles, Quick answers
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index + 1}`} key={index}>
            <AccordionTrigger className="text-lg font-semibold text-left">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-700">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
