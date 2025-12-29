
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
        <div
          className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-border"
          aria-hidden="true"
        />
        <div className="space-y-16">
          {howToSteps.map((item, itemIdx) => {
            const image = item.imageId
              ? PlaceHolderImages.find((p) => p.id === item.imageId)
              : null;
            const isOdd = item.step % 2 !== 0;

            return (
              <div
                key={item.step}
                className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-2"
              >
                <div
                  className={cn(
                    'text-center md:text-left',
                    isOdd ? 'md:text-right' : 'md:text-left',
                    isOdd ? 'md:pr-12' : 'md:pl-12'
                  )}
                >
                  <h3 className="font-headline text-4xl">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <div className={cn(
                  'flex items-center justify-center px-8',
                  isOdd ? 'md:order-last' : 'md:order-first'
                )}>
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={300}
                      height={250}
                      className="object-contain"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                </div>

                <div className="absolute left-1/2 top-1/2 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border bg-background font-headline text-lg">
                  {item.step}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


export default function HowToBuyPage() {
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
            
          </div>
        )}
      </div>

      <HowToOrder />

    </div>
  );
}
