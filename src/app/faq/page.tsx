
import { faqs } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export default function FaqPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl md:text-5xl">Câu Hỏi Thường Gặp</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground font-fraunces">
            Bạn có câu hỏi? Chúng tôi có câu trả lời. Nếu bạn không thể tìm thấy những gì bạn đang tìm kiếm, đừng ngần ngại liên hệ với chúng tôi.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger className="text-left font-headline text-lg">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
