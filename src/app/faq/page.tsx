
import { faqs } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const howToSteps = [
  {
    step: 1,
    title: "Chọn sản phẩm",
    description: "Chọn chiếc bánh và phụ kiện bạn thích vào giỏ hàng.",
    imageId: "faq-step-1",
  },
  {
    step: 2,
    title: "Lời chúc",
    description: "Nhập lời chúc mà bạn muốn chúng tôi viết kèm với bánh.",
    imageId: "faq-step-2",
  },
  {
    step: 3,
    title: "Thông tin",
    description: "Điền đầy đủ thông tin giao hàng.",
    imageId: "faq-step-3",
  },
  {
    step: 4,
    title: "Thanh toán",
    description: "Hoàn tất thanh toán bằng phương pháp chuyển khoản nhanh 24/7.",
    imageId: "faq-step-4",
  },
  {
    step: 5,
    title: "Xác nhận",
    description: "Đơn hàng của bạn sẽ được nhân viên của chúng tôi liên hệ qua điện thoại để xác nhận.",
    imageId: "faq-step-5",
  },
  {
    step: 6,
    title: "Giao hàng",
    description: "Bánh sẽ được chuẩn bị thật chỉn chu để giao tới bạn.",
    imageId: "faq-step-6",
  },
];


function HowToOrder() {
  return (
    <div className="py-16 sm:py-24">
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-px"></div>
        {howToSteps.map((item, index) => {
           const image = item.imageId ? PlaceHolderImages.find(p => p.id === item.imageId) : null;
           const isEven = index % 2 === 0;

          return (
            <div key={item.step} className="group relative grid grid-cols-2 gap-x-12 items-center">
              <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                <div className="h-8 w-8 rounded-full bg-background border flex items-center justify-center font-headline text-lg">
                  {item.step}
                </div>
              </div>
              
              {isEven ? (
                 <>
                    <div className="text-right pr-20">
                      <h3 className="font-headline text-4xl">{item.title}</h3>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="pl-20 py-10">
                       {image && (
                         <Image 
                           src={image.imageUrl}
                           alt={image.description}
                           width={250}
                           height={250}
                           className="object-contain"
                           data-ai-hint={image.imageHint}
                         />
                       )}
                    </div>
                 </>
              ) : (
                <>
                   <div className="pr-20 py-10 flex justify-end">
                      {image && (
                         <Image 
                           src={image.imageUrl}
                           alt={image.description}
                           width={250}
                           height={250}
                           className="object-contain"
                           data-ai-hint={image.imageHint}
                         />
                       )}
                   </div>
                   <div className="text-left pl-20">
                     <h3 className="font-headline text-4xl">{item.title}</h3>
                     <p className="mt-2 text-muted-foreground">{item.description}</p>
                   </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}


export default function FaqPage() {
  const faqIllustration = PlaceHolderImages.find(p => p.id === "faq-illustration");
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <h1 className="font-headline text-4xl md:text-5xl">Đặt bánh đơn giản, chỉ trong tích tắc.</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          Giữ vững lời hứa giúp bạn thưởng thức món bánh ngọt Pháp yêu thích ngay tại nhà, cách đặt bánh tại VIBARY được tối ưu chỉ với vài bước thật dễ dàng.
        </p>
        {faqIllustration && (
          <div className="mt-8 flex justify-center">
            <Image 
              src={faqIllustration.imageUrl} 
              alt={faqIllustration.description}
              width={300} 
              height={200}
              className="object-contain"
              data-ai-hint={faqIllustration.imageHint}
            />
          </div>
        )}
      </div>

      <HowToOrder />

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
