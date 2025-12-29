import { faqs } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function FaqPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="font-headline text-4xl md:text-5xl">Đặt bánh đơn giản, chỉ trong tích tắc.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Giữ vững lời hứa giúp bạn thưởng thức món bánh ngọt Pháp yêu thích ngay tại nhà, cách đặt bánh tại VIBARY được tối ưu chỉ với vài bước thật dễ dàng.
        </p>
        <div className="mt-8 flex justify-center">
          <Image 
            src="/images/how-to-buy-illustration.png" 
            alt="Illustration of a person holding cakes" 
            width={300} 
            height={200}
            className="object-contain"
            data-ai-hint="line art drawing"
          />
        </div>
      </div>

      <div className="mb-12 text-center">
        <h2 className="font-headline text-3xl md:text-4xl">Câu Hỏi Thường Gặp</h2>
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
