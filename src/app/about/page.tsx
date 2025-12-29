import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
    const bannerImage = PlaceHolderImages.find(p => p.id === 'about-banner');

    return (
        <div>
            <header className="relative h-[50vh] min-h-[300px] w-full">
                {bannerImage && (
                    <Image
                        src={bannerImage.imageUrl}
                        alt={bannerImage.description}
                        fill
                        className="object-cover"
                        priority
                        data-ai-hint={bannerImage.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
                <div className="container relative mx-auto flex h-full max-w-4xl flex-col justify-center text-center text-white px-4 sm:px-6 lg:px-8">
                    <h1 className="font-headline text-4xl leading-tight md:text-6xl">
                        Một Bức Thư Tình Gửi Tới Bánh Ngọt
                    </h1>
                </div>
            </header>

            <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="prose prose-lg mx-auto max-w-none prose-h2:font-headline prose-p:text-muted-foreground prose-blockquote:border-accent prose-blockquote:text-accent prose-blockquote:font-headline">
                    <h2>Giấc Mơ</h2>
                    <p>
                        Câu chuyện của VIBARY không bắt đầu từ một tiệm bánh lớn, mà trong một căn bếp nhỏ ngập nắng giữa lòng Bắc Ninh. Người sáng lập của chúng tôi, Lan, đã khám phá ra niềm đam mê với bánh ngọt Pháp trong một năm du học tại Paris. Cô bị mê hoặc bởi tính nghệ thuật, sự chính xác và sự cân bằng tinh tế của hương vị trong mỗi chiếc bánh entremet cô nếm thử.
                    </p>
                    <p>
                        Khi trở về Việt Nam, cô mơ ước mang phép màu đó về quê nhà, nhưng với một nét chấm phá độc đáo của Việt Nam. Cô muốn tạo ra những chiếc bánh vừa lạ vừa quen, vừa tinh tế vừa gần gũi.
                    </p>

                    <blockquote>
                        "Tôi muốn nắm bắt sự thanh lịch của Paris và thổi vào đó linh hồn của Bắc Ninh."
                    </blockquote>

                    <h2>Nghề thủ công</h2>
                    <p>
                        Lan đã dành nhiều năm để hoàn thiện tay nghề, không mệt mỏi thử nghiệm với các loại trái cây địa phương theo mùa như vải, chanh dây và xoài. Cô đã tỉ mỉ điều chỉnh độ ngọt để phù hợp với khẩu vị địa phương, tìm ra sự hòa hợp hoàn hảo giữa kỹ thuật Pháp và nguyên liệu Việt Nam.
                    </p>
                    <p>
                        VIBARY là đỉnh cao của giấc mơ đó—một sự tôn vinh kỹ thuật, sự sáng tạo và những nguyên liệu tươi ngon nhất mà đất nước xinh đẹp của chúng ta mang lại. Mỗi chiếc bánh là một minh chứng cho sự kiên nhẫn, một công trình của tình yêu, và một phần câu chuyện của chúng tôi, được chia sẻ cùng bạn.
                    </p>
                </div>
            </div>
        </div>
    );
}
