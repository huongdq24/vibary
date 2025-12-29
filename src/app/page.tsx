import Image from 'next/image';
import Link from 'next/link';
import { collections, products, articles } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, MessageSquareQuote } from 'lucide-react';
import { ProductCard } from '@/components/product-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function HeroCarousel() {
  const heroBanners = PlaceHolderImages.filter(p => p.id.startsWith('hero-banner'));

  return (
    <section className="w-full">
      <Carousel
        opts={{
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {heroBanners.map((banner) => (
            <CarouselItem key={banner.id}>
              <div className="relative h-[60vh] min-h-[400px] w-full">
                <Image
                  src={banner.imageUrl}
                  alt={banner.description}
                  fill
                  className="object-cover"
                  priority={heroBanners.indexOf(banner) === 0}
                  data-ai-hint={banner.imageHint}
                />
                 <div className="absolute inset-0 bg-black/30" />
                 <div className="container relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8">
                    <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl leading-tight">
                        Nghệ Thuật Bánh Ngọt Pháp Hiện Đại
                    </h1>
                    <p className="mt-4 max-w-2xl text-lg md:text-xl">
                        Chế tác từ những nguyên liệu tươi ngon nhất của Việt Nam.
                    </p>
                    <Button asChild size="lg" className="mt-8">
                        <Link href="/products">Khám Phá Bộ Sưu Tập</Link>
                    </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 border-white hover:bg-white hover:text-black" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 border-white hover:bg-white hover:text-black" />
      </Carousel>
    </section>
  );
}


function FeaturedCollections() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl">Bộ Sưu Tập Nổi Bật</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Mỗi bộ sưu tập kể một câu chuyện. Tìm bộ sưu tập phù hợp với bạn.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection) => {
            const image = PlaceHolderImages.find((p) => p.id === collection.imageId);
            return (
              <Link href={`/products?collection=${collection.slug}`} key={collection.id} className="group relative">
                <Card className="overflow-hidden">
                  <div className="aspect-w-3 aspect-h-4">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={collection.title}
                      width={800}
                      height={600}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  </div>
                </Card>
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <h3 className="font-headline text-2xl">{collection.title}</h3>
                  <p className="mt-2 text-sm">{collection.description}</p>
                   <Button variant="outline" className="mt-4 bg-transparent text-white border-white hover:bg-white hover:text-black">
                     Khám phá ngay
                   </Button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function NewArrivals() {
  const newProducts = products.slice(4, 8);
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl">Sản Phẩm Mới</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Tươi mới từ bếp bánh của chúng tôi, hãy khám phá những sáng tạo mới nhất.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}


export default function Home() {
  return (
    <>
      <HeroCarousel />
      <FeaturedCollections />
      <NewArrivals />
    </>
  );
}
