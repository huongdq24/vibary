
'use client';

import { useState } from 'react';
import { products, collections } from "@/lib/data";
import type { Product, Collection } from "@/lib/types";
import { ProductCard } from "@/components/product-card";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const collectionSlug = searchParams.get('collection');

  const [activeCollection, setActiveCollection] = useState<string | null>(collectionSlug);

  const getFilteredProducts = () => {
    if (!activeCollection) {
      return products;
    }
    const collection = collections.find(c => c.slug === activeCollection);
    if (collection) {
      return products.filter(p => p.collection === collection.slug);
    }
    return products;
  };
  
  const filteredProducts = getFilteredProducts();

  const allCollections: Collection[] = [
    { id: 'all', slug: 'all', title: 'Tất cả sản phẩm', description: '', imageId: '' },
    ...collections
  ];
  
  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12">
            <div className="flex justify-center border-b">
                {allCollections.map(collection => (
                     <Link
                        key={collection.id}
                        href={`/products?collection=${collection.slug}`}
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveCollection(collection.slug === 'all' ? null : collection.slug);
                            window.history.pushState({}, '', `/products?collection=${collection.slug}`);
                        }}
                     >
                        <div
                            className={cn(
                                "cursor-pointer px-4 py-2 text-sm uppercase tracking-wider text-muted-foreground transition-colors",
                                (!activeCollection && collection.slug === 'all') || activeCollection === collection.slug
                                ? "border-b-2 border-foreground text-foreground font-semibold"
                                : "hover:text-foreground"
                            )}
                        >
                            {collection.title}
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
            <p className="text-muted-foreground">Không tìm thấy sản phẩm nào trong bộ sưu tập này.</p>
          </div>
        )}
      </div>
    </div>
  );
}
