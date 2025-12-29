
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { collections, products } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { ProductCard } from '@/components/product-card';
import React from 'react';
import { motion } from 'framer-motion';

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

function Hero() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-banner-1');
  return (
    <section className="relative h-[80vh] min-h-[400px] w-full bg-cover bg-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
      <div className="container relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <h1 className="font-headline text-5xl leading-tight md:text-7xl">
          Nghệ Thuật Bánh Ngọt Pháp Hiện Đại
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl">
          Trải nghiệm sự cân bằng tinh tế giữa kỹ thuật Pháp và hương vị trái cây theo mùa của Việt Nam. Được làm thủ công tại Bắc Ninh.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="/products">Khám Phá Bộ Sưu Tập</Link>
        </Button>
      </div>
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
              <p className="font-fraunces text-sm text-[#0A0A0A] text-center">
                {text.includes("091 255 03 35") ? (
                  <>
                    GẤP GÁP ĐẶT BÁNH GỌI <a href="tel:0912550335" className="font-bold">091 255 03 35</a>
                  </>
                ) : text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
  )
}

const categories = [
  {
    name: 'bánh ngọt',
    href: '/products?collection=special-occasions',
    imageId: 'category-sweet-cake',
    description: 'Dành cho những tín đồ hảo ngọt'
  },
  {
    name: 'bánh mặn',
    href: '/products',
    imageId: 'category-salty-cake',
    description: 'Hương vị đậm đà khó cưỡng'
  },
  {
    name: 'bánh sinh nhật',
    href: '/products?collection=special-occasions',
    imageId: 'category-birthday-cake',
    description: 'Dành cho từ 2-10 người'
  },
  {
    name: 'Đồ uống',
    href: '/products',
    imageId: 'category-drinks',
    description: 'Giải nhiệt và thư giãn'
  },
  {
    name: 'Bánh khác',
    href: '/products',
    imageId: 'category-other-cakes',
    description: 'Khám phá những hương vị mới'
  },
  {
    name: 'Đồ ăn khác',
    href: '/products',
    imageId: 'category-other-food',
    description: 'Nhiều lựa chọn hấp dẫn khác'
  },
];

function CategorySection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const image = PlaceHolderImages.find((p) => p.id === category.imageId);
            return (
              <Link href={category.href} key={category.name} className="group relative block overflow-hidden rounded-lg">
                <div className="aspect-w-4 aspect-h-3 relative overflow-hidden rounded-lg">
                  {image ? (
                    <Image
                      src={image.imageUrl}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  ) : (
                    <div className="bg-gray-200 w-full h-full"></div>
                  )}
                  <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 p-4 rounded-lg shadow-lg backdrop-blur-sm">
                    <h3 className="font-headline text-xl text-black">{category.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                    <div className="flex justify-end">
                      <ArrowRight className="h-5 w-5 text-black mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-rotate-45" />
                    </div>
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
                    <Button asChild className="mt-8" variant="default" size="lg">
                        <Link href="/products" className="bg-black text-white hover:bg-black/80 rounded-full font-bold">ĐẶT BÁNH NGAY</Link>
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
                    <div key={`${product.id}-${index}`} className="flex-shrink-0 w-[40vw] sm:w-[30vw] md:w-[22vw] lg:w-[18vw] -ml-12 first:ml-0">
                        <ProductCard product={product} />
                    </div>
                ))}
            </motion.div>
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


export default function Home() {
  return (
    <>
      <Hero />
      <AnnouncementBar />
      <FeaturedProducts />
      <CategorySection />
      <FeaturedCollections />
      <NewArrivals />
    </>
  );
}

    
