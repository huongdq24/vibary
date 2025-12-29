
"use client";

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
  type CarouselApi,
} from "@/components/ui/carousel"
import React from 'react';
import Autoplay from "embla-carousel-autoplay"

function HeroCarousel() {
  const heroBanners = PlaceHolderImages.filter(p => p.id.startsWith('hero-banner'));
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])


  return (
    <section className="relative w-full">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {heroBanners.map((banner, index) => (
            <CarouselItem key={banner.id}>
              <div className="relative h-[60vh] min-h-[400px] md:h-[calc(100vh-80px)] w-full">
                <Image
                  src={banner.imageUrl}
                  alt={banner.description}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  data-ai-hint={banner.imageHint}
                />
                 <div className="absolute inset-0 bg-black/30" />
                 <div className="container relative mx-auto flex h-full max-w-7xl flex-col items-start justify-center text-left text-white px-4 sm:px-6 lg:px-8">
                    <p className="text-lg uppercase tracking-widest font-body">BST BÁNH TRÁI TIM</p>
                    <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl leading-tight max-w-2xl mt-4">
                        Cùng một tình yêu dịu dàng.
                    </h1>
                    <Button asChild variant="outline" size="lg" className="mt-8 bg-transparent text-white border-white hover:bg-white hover:text-black">
                        <Link href="/products">KHÁM PHÁ NGAY</Link>
                    </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute bottom-8 right-8">
         <div className="flex items-center justify-center gap-2">
            {Array.from({ length: count }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => api?.scrollTo(i)}
                    className="h-1 w-10 rounded-full"
                >
                    <div className={`h-1 w-full rounded-full transition-colors ${current === i + 1 ? 'bg-white' : 'bg-white/50'}`} />
                </button>
            ))}
        </div>
    </div>
    </section>
  );
}

function AnnouncementBar() {
  return (
     <div className="bg-background text-foreground border-y">
        <div className="container mx-auto flex h-10 max-w-full items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-12 font-fraunces text-sm text-black">
              <p>GẤP GÁP ĐẶT BÁNH GỌI <a href="tel:0912550335" className="font-bold">091 255 03 35</a></p>
              <p>TRAO BÁNH TẬN TAY, TẠI BẮC NINH</p>
              <p>GẤP GÁP ĐẶT BÁNH GỌI <a href="tel:0912550335" className="font-bold">091 255 03 35</a></p>
              <p>TRAO BÁNH TẬN TAY, TẠI BẮC NINH</p>
              <p>GẤP GÁP ĐẶT BÁNH GỌI <a href="tel:0912550335" className="font-bold">091 255 03 35</a></p>
              <p>TRAO BÁNH TẬN TAY, TẠI BẮC NINH</p>
              <p>GẤP GÁP ĐẶT BÁNH GỌI <a href="tel:0912550335" className="font-bold">091 255 03 35</a></p>
              <p>TRAO BÁNH TẬN TAY, TẠI BẮC NINH</p>
          </div>
        </div>
      </div>
  )
}

function FeaturedProducts() {
    const featuredProducts = [...products, ...products]; // Duplicate products for continuous scroll
    const plugin = React.useRef(
      Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl">Mang tới trải nghiệm<br/>đặt bánh Pháp cao cấp trực tuyến</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                        VIBARY có mặt tại đây là để mang tới cho bạn trải nghiệm thưởng thức bánh ngọt Pháp hiện đại, dành cho người Việt.
                    </p>
                    <Button asChild className="mt-6" variant="outline">
                        <Link href="/products">ĐẶT BÁNH NGAY</Link>
                    </Button>
                </div>
                <Carousel
                    plugins={[plugin.current]}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        {featuredProducts.map((product, index) => (
                            <CarouselItem key={`${product.id}-${index}`} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                                <div className="p-1">
                                    <ProductCard product={product} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
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
      <AnnouncementBar />
      <FeaturedProducts />
      <FeaturedCollections />
      <NewArrivals />
    </>
  );
}

    
