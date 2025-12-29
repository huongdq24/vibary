

"use client";

import Image from 'next/image';
import Link from 'next/link';
import { collections, products, articles } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, PlayCircle, Phone } from 'lucide-react';
import { ProductCard } from '@/components/product-card';
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from '@/lib/utils';


const marqueeVariantsLR = {
  animate: {
    x: ['-100%', '0%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40,
        ease: "linear",
      },
    },
  },
};

const marqueeVariantsRL = {
  animate: {
    x: ['0%', '-100%'],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40,
        ease: "linear",
      },
    },
  },
};

const heroBanners = [
  {
    id: "hero-banner-1",
    title: "BST BÁNH ENTREMET DÀNH CHO",
    subtitle: "Mọi dịp đặc biệt của bạn",
    buttonText: "KHÁM PHÁ NGAY",
    buttonLink: "/products?collection=special-occasions",
    imageUrl: "/images/banner/1.png",
    description: "Beautifully crafted entremet cake on a platter.",
    imageHint: "entremet cake"
  },
  {
    id: "hero-banner-2",
    title: "BST BÁNH ENTREMET DÀNH CHO",
    subtitle: "Mọi dịp đặc biệt của bạn",
    buttonText: "KHÁM PHÁ NGAY",
    buttonLink: "/products?collection=special-occasions",
    imageUrl: "/images/banner/2.png",
    description: "Close up shot of a slice of layered mousse cake.",
    imageHint: "mousse cake"
  },
  {
    id: "hero-banner-3",
    title: "BST BÁNH ENTREMET DÀNH CHO",
    subtitle: "Mọi dịp đặc biệt của bạn",
    buttonText: "KHÁM PHÁ NGAY",
    buttonLink: "/products?collection=special-occasions",
    imageUrl: "/images/banner/3.png",
    description: "A variety of colorful French pastries on display.",
    imageHint: "french pastry"
  },
  {
    id: "hero-banner-4",
    title: "BST BÁNH ENTREMET DÀNH CHO",
    subtitle: "Mọi dịp đặc biệt của bạn",
    buttonText: "KHÁM PHÁ NGAY",
    buttonLink: "/products?collection=special-occasions",
    imageUrl: "/images/banner/4.png",
    description: "A baker decorating a modern cake with precision.",
    imageHint: "cake decorating"
  },
  {
    id: "hero-banner-5",
    title: "BST BÁNH ENTREMET DÀNH CHO",
    subtitle: "Mọi dịp đặc biệt của bạn",
    buttonText: "KHÁM PHÁ NGAY",
    buttonLink: "/products?collection=special-occasions",
    imageUrl: "/images/banner/5.png",
    description: "Luxurious chocolate entremet with a glossy finish.",
    imageHint: "chocolate entremet"
  },
  {
    id: "hero-banner-6",
    title: "BST BÁNH ENTREMET DÀNH CHO",
    subtitle: "Mọi dịp đặc biệt của bạn",
    buttonText: "KHÁM PHÁ NGAY",
    buttonLink: "/products?collection=special-occasions",
    imageUrl: "/images/banner/6.png",
    description: "A vibrant fruit-topped cake, perfect for summer.",
    imageHint: "fruit cake"
  }
];


function Hero() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );
  
  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])


  return (
    <section className="relative h-screen w-full text-white">
      <Carousel
        setApi={setApi}
        plugins={[plugin.current]}
        className="w-full h-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="h-screen">
          {heroBanners.map((banner, index) => (
            <CarouselItem key={banner.id} className="h-full">
              <div className="relative w-full h-full">
                <Image
                  src={banner.imageUrl}
                  alt={banner.description}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  data-ai-hint={banner.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
                <div className="container relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
                  <h2 className="font-body text-xl tracking-widest uppercase">{banner.title}</h2>
                  <h1 className="font-headline text-5xl leading-tight md:text-7xl mt-2">
                    {banner.subtitle}
                  </h1>
                  <Button asChild size="lg" className="mt-8 rounded-full bg-white text-black hover:bg-white/90">
                    <Link href={banner.buttonLink}>{banner.buttonText}</Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
            {Array.from({ length: count }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => api?.scrollTo(index)}
                    className={cn(
                        "h-1.5 w-12 rounded-full transition-all duration-300",
                        current === index ? "bg-white" : "bg-white/30"
                    )}
                />
            ))}
        </div>
      </Carousel>
    </section>
  );
}


function AnnouncementBar() {
  const announcements = [
    "TRAO BÁNH TẬN TAY, TẠI BẮC NINH",
    "GẤP GÁP ĐẶT BÁNH GỌI 091 255 03 35",
  ];
  const duplicatedAnnouncements = Array(10).fill(announcements).flat();

  return (
     <div className="bg-gray-100 text-foreground border-b overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          variants={marqueeVariantsRL}
          animate="animate"
        >
          {duplicatedAnnouncements.map((text, index) => (
            <div key={index} className="flex-shrink-0 flex items-center h-10 px-8">
              <p className="font-body text-sm text-[#0A0A0A] text-center tracking-wider">
                {text.includes("091 255 03 35") ? (
                  <span className="flex items-center">
                    GẤP GÁP ĐẶT BÁNH GỌI <Phone className="mx-2 h-4 w-4" /><a href="tel:0912550335">091 255 03 35</a>
                  </span>
                ) : text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
  )
}

function CategorySection() {
    const categories = [
        { name: 'Bánh ngọt', description: 'Dành cho những tín đồ hảo ngọt', imageId: 'category-sweet-cake' },
        { name: 'Bánh mặn', description: 'Hương vị đậm đà khó cưỡng', imageId: 'category-salty-cake' },
        { name: 'Bánh sinh nhật', description: 'Dành cho từ 2-10 người', imageId: 'category-birthday-cake' },
        { name: 'Đồ uống', description: 'Giải nhiệt và thư giãn', imageId: 'category-drinks' },
        { name: 'Bánh khác', description: 'Khám phá những hương vị mới', imageId: 'category-other-cakes' },
        { name: 'Đồ ăn khác', description: 'Nhiều lựa chọn hấp dẫn khác', imageId: 'category-other-food' },
    ];
  
    return (
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const image = PlaceHolderImages.find((p) => p.id === category.imageId);
              return (
                  <Link
                  href="/products"
                  key={category.name}
                  className="group relative block h-96 overflow-hidden rounded-3xl shadow-xl transition-transform duration-300 hover:scale-105"
                  >
                  {image && (
                      <Image
                          src={image.imageUrl}
                          alt={category.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          priority={false}
                          data-ai-hint={image.imageHint}
                      />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                      <h3 className="text-3xl md:text-4xl font-bold tracking-wide">
                      {category.name}
                      </h3>
                      <p className="mt-2 text-lg opacity-90">{category.description}</p>
                      <span className="mt-4 inline-flex items-center text-2xl font-light">
                      →<span className="ml-2 text-sm uppercase tracking-wider opacity-80">Khám phá</span>
                      </span>
                  </div>
                  </Link>
              )
            })}
          </div>
        </div>
      </section>
    );
  }

function WorkshopSection() {
  return (
    <section className="bg-[#F9F7F5] py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <p className="font-body text-sm uppercase tracking-widest text-muted-foreground">
              MỘT NGÀY TẠI XƯỞNG
            </p>
            <h2 className="mt-4 font-headline text-4xl md:text-5xl">
              Công việc mà chúng tôi yêu thích mỗi ngày
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground lg:mx-0">
              Ghé thăm Tiktok của VIBARY để xem những tư liệu chân thực
              nhất – về cách mà chúng tôi hoàn thiện một chiếc bánh thật tinh tế
              gửi trao tới bạn.
            </p>
            <Button asChild className="mt-8 bg-black text-white hover:bg-black/80 rounded-full font-bold" size="lg">
              <Link href="#">THEO DÕI NGAY</Link>
            </Button>
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-xl">
             <video 
                className="h-full w-full object-cover"
                src="https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0850828234.firebasestorage.app/o/FOODIE_1762401489.mp4?alt=media&token=2d8a68ba-f209-4749-befa-e507624cc36d" 
                autoPlay 
                loop 
                muted 
                playsInline
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function FeaturedProducts() {
    const featuredProducts = [...products, ...products];

    return (
        <section className="py-12 sm:py-20 bg-white overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl">Mang tới trải nghiệm<br/>đặt bánh Pháp cao cấp trực tuyến</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                        VIBARY có mặt tại đây là để mang tới cho bạn trải nghiệm thưởng thức bánh ngọt Pháp hiện đại, dành cho người Việt.
                    </p>
                    <Button asChild className="mt-8 bg-black text-white hover:bg-black/80 rounded-full font-bold" variant="default" size="lg">
                        <Link href="/products">ĐẶT BÁNH NGAY</Link>
                    </Button>
                </div>
            </div>
             <motion.div 
                className="flex"
                variants={marqueeVariantsLR}
                animate="animate"
                whileHover={{ animationPlayState: 'paused' }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
             >
                {featuredProducts.map((product, index) => (
                    <div key={`${product.id}-${index}`} className="flex-shrink-0 w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] px-4">
                        <ProductCard product={product} />
                    </div>
                ))}
            </motion.div>
        </section>
    );
}

function NewArrivals() {
  const newProducts = products.slice(0, 4);
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

function HotNews() {
  const latestArticles = articles.slice(0, 3);
  const singleImage = PlaceHolderImages.find((p) => p.id === 'blog-1');
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="font-headline text-4xl md:text-5xl">Tin tức "nóng hổi"</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {latestArticles.map((article) => {
            return (
              <Link href={`/news/${article.slug}`} key={article.id} className="group flex flex-col">
                <div className="flex-grow flex flex-col">
                  {singleImage && (
                    <div className="w-full overflow-hidden rounded-lg aspect-[4/3]">
                      <Image
                        src={singleImage.imageUrl}
                        alt={article.title}
                        width={600}
                        height={450}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={singleImage.imageHint}
                      />
                    </div>
                  )}
                  <div className="mt-4 flex-grow flex flex-col">
                    <h3 className="font-headline text-xl group-hover:underline">{article.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground flex-grow">{article.excerpt}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}


export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  // The header has a height of 80px (h-20)
  const headerHeight = 80;

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        if (heroBottom <= headerHeight) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <div ref={heroRef}>
        <Hero />
      </div>
      <div
        className={cn(
          "transition-all duration-300",
          isSticky ? "fixed top-20 z-40 w-full" : "relative"
        )}
      >
        <AnnouncementBar />
      </div>
      <FeaturedProducts />
      <CategorySection />
      <NewArrivals />
      <WorkshopSection />
      <HotNews />
    </>
  );
}
