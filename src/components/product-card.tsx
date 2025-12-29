
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React from "react";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const placeholder = PlaceHolderImages.find((p) => p.id === product.imageId);

  // This will give a pseudo-random but consistent position for each product
  const positions = [
    "justify-center items-center text-center",
    "justify-start items-end text-left",
    "justify-end items-end text-right",
    "justify-start items-start text-left",
    "justify-end items-start text-right",
  ];
  const positionClass = React.useMemo(() => {
    const charCodeSum = product.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return positions[charCodeSum % positions.length];
  }, [product.id]);

  return (
    <Card className="group relative flex h-full flex-col overflow-hidden border-0 shadow-none bg-transparent">
      <Link href={`/products/${product.slug}`} className="flex flex-col h-full">
        <div className="relative w-full overflow-hidden rounded-lg aspect-square">
          {placeholder && (
            <Image
              src={placeholder.imageUrl}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              data-ai-hint={placeholder.imageHint}
            />
          )}
          <div className={cn("absolute inset-0 flex p-4", positionClass)}>
            <CardTitle className="font-body text-xs uppercase tracking-widest bg-white/90 text-black px-3 py-1.5 rounded-full border border-black/10 backdrop-blur-sm shadow-sm transition-opacity duration-300 ease-in-out group-hover:opacity-0">
              {product.name}
            </CardTitle>
          </div>
        </div>
      </Link>
    </Card>
  );
}

    