import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const placeholder = PlaceHolderImages.find((p) => p.id === product.imageId);

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg border-0 shadow-none">
      <Link href={`/products/${product.slug}`} className="flex flex-col h-full text-center">
        <CardHeader className="p-0">
          <div className="aspect-square w-full overflow-hidden">
            {placeholder && (
              <Image
                src={placeholder.imageUrl}
                alt={product.name}
                width={600}
                height={600}
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                data-ai-hint={placeholder.imageHint}
              />
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4">
          <CardTitle className="font-headline text-lg leading-tight uppercase tracking-widest">
            {product.name}
          </CardTitle>
        </CardContent>
      </Link>
    </Card>
  );
}

    