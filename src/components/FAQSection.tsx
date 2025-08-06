import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I see images before paying?",
    answer: "Yes! After uploading your baby's photo, you'll receive 20 low-resolution preview images to browse. You can then select your favorites and pay ₹299 to receive the high-resolution versions instantly."
  },
  {
    question: "How fast is delivery?",
    answer: "Most orders are processed within 2-4 hours. Once you upload your photo, you'll get preview images quickly, and after payment, high-resolution downloads are available immediately."
  },
  {
    question: "Is my baby's face retained accurately?",
    answer: "Absolutely! Our advanced AI technology is specifically designed to preserve your baby's unique facial features, expressions, and characteristics while creating beautiful professional-style photoshoots."
  },
  {
    question: "Is the service safe?",
    answer: "Yes, completely safe. We use secure servers, encrypt all data, and never share your photos with anyone. Your baby's images are processed privately and deleted from our servers after delivery."
  },
  {
    question: "Are refunds available?",
    answer: "Since you can preview all images before paying, we don't offer refunds. This policy allows us to keep our prices affordable while ensuring you're completely satisfied with your selection before purchase."
  },
  {
    question: "Can I use this on mobile?",
    answer: "Yes! Our service is fully optimized for mobile devices. You can upload photos, preview results, and download your high-resolution images directly from your smartphone."
  },
  {
    question: "What photo quality do I need to upload?",
    answer: "Any clear photo of your baby will work! We recommend well-lit images where your baby's face is clearly visible. Phone photos work perfectly fine - no professional camera needed."
  },
  {
    question: "What styles will I get?",
    answer: "You'll receive 20 different professional photoshoot styles including portrait, themed backgrounds, artistic lighting, vintage looks, fairy tale themes, and more. Each image is unique and beautifully crafted."
  }
];

export default function FAQSection() {
  return (
    <section className="py-16 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Baby Photoshoot AI
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card rounded-xl border border-accent/20 px-6 shadow-card hover:shadow-soft transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}