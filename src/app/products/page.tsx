

'use client';

import { products } from "@/lib/data";
import { ProductCard } from "@/components/product-card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";
import React from "react";

const productCategories = [
    { 
        slug: 'banh-sinh-nhat', 
        title: 'Bánh sinh nhật',
        subtitle: 'DÀNH CHO 2-10 NGƯỜI',
        description: 'Sản phẩm đặc trưng của VIBARY là bánh Entremet – dòng bánh lạnh cao cấp của Pháp. Dành cho tiệc sinh nhật, hoặc bất kỳ khoảnh khắc nào quan trọng của bạn.'
    },
    { 
        slug: 'banh-ngot', 
        title: 'Bánh ngọt',
        subtitle: 'HƯƠNG VỊ NGỌT NGÀO',
        description: 'Những chiếc bánh ngọt tinh tế, từ mousse mềm mịn đến tart giòn tan, hoàn hảo cho những giây phút thư giãn hay tụ họp bạn bè.'
    },
    { 
        slug: 'banh-man', 
        title: 'Bánh mặn',
        subtitle: 'LỰA CHỌN ĐẬM ĐÀ',
        description: 'Khám phá hương vị đậm đà và mới lạ với các loại bánh mặn được làm thủ công, lý tưởng cho bữa sáng hoặc bữa ăn nhẹ.'
    },
    { 
        slug: 'do-uong', 
        title: 'Đồ uống',
        subtitle: 'GIẢI NHIỆT & THƯ GIÃN',
        description: 'Kết hợp hoàn hảo với bánh, các loại đồ uống của chúng tôi được pha chế để mang lại sự sảng khoái và thư giãn.'
    },
    { 
        slug: 'banh-khac', 
        title: 'Bánh khác',
        subtitle: 'KHÁM PHÁ HƯƠNG VỊ MỚI',
        description: 'Dành cho những ai thích phiêu lưu, danh mục này bao gồm các sáng tạo độc đáo và các loại bánh đặc biệt theo mùa của chúng tôi.'
    },
    { 
        slug: 'do-an-khac', 
        title: 'Đồ ăn khác',
        subtitle: 'LỰA CHỌN HẤP DẪN KHÁC',
        description: 'Ngoài bánh ngọt, chúng tôi còn cung cấp các món ăn nhẹ và đồ ăn vặt hấp dẫn khác để hoàn thiện trải nghiệm của bạn.'
    },
];


export default function ProductsPage() {

  return (
    <div className="bg-background">
        <nav className="sticky top-20 z-40 bg-background/80 backdrop-blur-lg border-b">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-start items-center h-16 space-x-6 overflow-x-auto">
                    {productCategories.map(category => (
                        <a
                            key={category.slug}
                            href={`#${category.slug}`}
                            className="text-sm font-bold uppercase text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                        >
                            {category.title}
                        </a>
                    ))}
                </div>
            </div>
        </nav>

      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {productCategories.map((category, index) => {
          const categoryProducts = products.filter(p => p.categorySlug === category.slug);

          if (categoryProducts.length === 0) {
            return null;
          }

          return (
            <section key={category.slug} id={category.slug} className="scroll-mt-24">
              <div className="mb-12 pt-12 text-left">
                <p className="text-sm uppercase tracking-widest text-muted-foreground">{category.subtitle}</p>
                <div className="inline-block">
                  <h1 className="font-headline text-4xl md:text-5xl mt-2 uppercase font-bold">{category.title}</h1>
                  <Separator className="my-2 h-0.5 w-full bg-foreground" />
                </div>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground text-left ml-0">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {index < productCategories.filter(c => products.some(p => p.categorySlug === c.slug)).length - 1 && (
                <Separator className="my-16 sm:my-24" />
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
