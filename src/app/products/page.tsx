
'use client';

import { useState } from 'react';
import { products } from "@/lib/data";
import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/product-card";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const productCategories = [
    { slug: 'all', title: 'Tất cả' },
    { slug: 'banh-ngot', title: 'Bánh ngọt' },
    { slug: 'banh-man', title: 'Bánh mặn' },
    { slug: 'banh-sinh-nhat', title: 'Bánh sinh nhật' },
    { slug: 'do-uong', title: 'Đồ uống' },
    { slug: 'banh-khac', title: 'Bánh khác' },
    { slug: 'do-an-khac', title: 'Đồ ăn khác' },
];


export default function ProductsPage() {
  const searchParams = useSearchParams();
  const collectionSlug = searchParams.get('collection');

  const [activeCategory, setActiveCategory] = useState<string | null>(collectionSlug ?? 'all');

  // NOTE: This filtering logic is a placeholder.
  // The actual products don't have these new categories yet.
  // The filter will show all products for now, except for the placeholder categories.
  const getFilteredProducts = () => {
    if (!activeCategory || activeCategory === 'all') {
      return products;
    }
    // Since products don't have these new categories, we'll return an empty array
    // for now to show that the filtering mechanism is in place.
    // In a real scenario, you'd filter products based on the activeCategory.
    // Example: return products.filter(p => p.categorySlug === activeCategory);
    return [];
  };
  
  const filteredProducts = activeCategory === 'all' ? products : getFilteredProducts();

  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12">
            <div className="flex justify-center border-b flex-wrap">
                {productCategories.map(category => (
                     <Link
                        key={category.slug}
                        href={`/products?collection=${category.slug}`}
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveCategory(category.slug);
                            window.history.pushState({}, '', `/products?collection=${category.slug}`);
                        }}
                     >
                        <div
                            className={cn(
                                "cursor-pointer px-4 py-2 text-sm uppercase tracking-wider text-muted-foreground transition-colors",
                                activeCategory === category.slug
                                ? "border-b-2 border-foreground text-foreground font-semibold"
                                : "hover:text-foreground"
                            )}
                        >
                            {category.title}
                        </div>
                    </Link>
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
