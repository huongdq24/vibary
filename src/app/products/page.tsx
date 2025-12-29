
'use client';

import { useState, useMemo } from 'react';
import { products } from "@/lib/data";
import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/product-card";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

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
  const searchParams = useSearchParams();
  const collectionSlug = searchParams.get('collection');

  const [activeCategory, setActiveCategory] = useState<string>(collectionSlug ?? 'banh-sinh-nhat');

  const activeCategoryData = useMemo(() => {
    return productCategories.find(c => c.slug === activeCategory);
  }, [activeCategory]);
  
  const getFilteredProducts = () => {
    if (!activeCategory) {
      return products;
    }
    return products.filter(p => p.categorySlug === activeCategory);
  };
  
  const filteredProducts = getFilteredProducts();

  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        {activeCategoryData && (
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">{activeCategoryData.subtitle}</p>
            <h1 className="font-headline text-4xl md:text-5xl mt-2">{activeCategoryData.title}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              {activeCategoryData.description}
            </p>
          </div>
        )}

        <div className="mb-12">
            <div className="flex justify-center border-b flex-wrap">
                {productCategories.map(category => (
                     <div
                        key={category.slug}
                        onClick={() => {
                            setActiveCategory(category.slug);
                            window.history.pushState({}, '', `/products?collection=${category.slug}`);
                        }}
                        className={cn(
                            "cursor-pointer px-4 py-2 text-sm uppercase tracking-wider text-muted-foreground transition-colors",
                            activeCategory === category.slug
                            ? "border-b-2 border-foreground text-foreground font-semibold"
                            : "hover:text-foreground"
                        )}
                     >
                        {category.title}
                    </div>
                ))}
            </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">Không tìm thấy sản phẩm nào trong danh mục này.</p>
          </div>
        )}
      </div>
    </div>
  );
}
