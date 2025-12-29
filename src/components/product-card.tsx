
"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import React, { useState, useEffect } from 'react';

type ProductCardProps = {
  product: Product;
};

const positionClasses = [
  'justify-center items-center text-center',
  'justify-start items-end text-left',
  'justify-end items-start text-right'
];

export function ProductCard({ product }: ProductCardProps) {
  const placeholder = PlaceHolderImages.find((p) => p.id === product.imageIds[0]);
  const [randomPositionClass, setRandomPositionClass] = useState('');

  useEffect(() => {
    // This will only run on the client, after hydration
    // ensuring no server-client mismatch.
    setRandomPositionClass(positionClasses[Math.floor(Math.random() * positionClasses.length)]);
  }, []);


  return (
    <Card className="group flex h-full flex-col overflow-hidden border-0 shadow-none bg-transparent rounded-none">
      <Link href={`/products/${product.slug}`} className="flex flex-col h-full text-center">
        <div className="relative w-full overflow-hidden aspect-square flex-grow">
          {placeholder && (
            <Image
              src={placeholder.imageUrl}
              alt={product.name}
              fill
              className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
              data-ai-hint={placeholder.imageHint}
            />
          )}
           {randomPositionClass && (
             <div className={cn(
                "absolute inset-0 p-6 flex flex-col transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-black/20",
                randomPositionClass
             )}>
                <h3 className="font-headline text-2xl uppercase tracking-wider text-white" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.5)'}}>{product.name}</h3>
             </div>
           )}
        </div>
        <div className="p-4 border-t border-transparent group-hover:border-foreground/20 transition-colors">
            <span className="text-sm text-foreground group-hover:font-semibold">Xem chi tiết</span>
        </div>
      </Link>
    </Card>
  );
}
