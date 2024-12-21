import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "What is Corruptbox?",
      answer: "Corruptbox is a revolutionary and evolving music creation mod that transforms interactive music composition. It combines innovative sound design with user-friendly mechanics, providing a rewarding experience for musicians of all skill levels."
    },
    {
      question: "Do I need musical experience to use Corruptbox?",
      answer: "Not at all! Corruptbox is designed to be accessible for beginners while offering depth for experienced composers. Its intuitive interface allows anyone to start creating unique soundscapes immediately."
    },
    {
      question: "Can I share my Corruptbox creations?",
      answer: "Corruptbox has a vibrant community where you can share your musical creations and explore the artistic diversity of other users. It's a great way to get inspired and showcase your work."
    },
    {
      question: "What makes Corruptbox different from other music creation tools?",
      answer: "Corruptbox stands out with its unique blend of enchanting characters, diverse sound palette, and seamless controls. It offers a distinctive approach to music creation that combines visual and auditory elements in an innovative way."
    },
    {
      question: "Is Corruptbox available on multiple platforms?",
      answer: "Yes, Corruptbox is designed to be cross-platform compatible. You can enjoy the Corruptbox experience on various devices and operating systems."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-purple-400">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-purple-400">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

