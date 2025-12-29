import Image from 'next/image';
import Link from 'next/link';
import { collections, products } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
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
              <div className="relative h-[60vh] min-h-[400px] md:h-[calc(100vh-128px)] w-full">
                <Image
                  src={banner.imageUrl}
                  alt={banner.description}
                  fill
                  className="object-cover"
                  priority={heroBanners.indexOf(banner) === 0}
                  data-ai-hint={banner.imageHint}
                />
                 <div className="absolute inset-0 bg-black/30" />
                 <div className="container relative mx-auto flex h-full max-w-7xl flex-col items-start justify-center text-left text-white px-4 sm:px-6 lg:px-8">
                    <p className="text-lg uppercase tracking-widest font-body">BST BÁNH TRÁI TIM</p>
                    <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl leading-tight max-w-2xl mt-4">
                        Cùng một tình yêu dịu dàng.
                    </h1>
                    <Button asChild variant="outline" size="lg" className="mt-8 bg-white border-white text-black hover:bg-white/90">
                        <Link href="/products">KHÁM PHÁ NGAY</Link>
                    </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
             <div className="flex items-center gap-2">
                <CarouselPrevious className="static -translate-y-0 text-white bg-transparent border-0 hover:bg-white/20" />
                <CarouselNext className="static -translate-y-0 text-white bg-transparent border-0 hover:bg-white/20" />
            </div>
        </div>
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
