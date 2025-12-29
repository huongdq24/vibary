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
    <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <Link href={`/products/${product.slug}`} className="flex flex-col h-full">
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
          <CardTitle className="font-headline text-xl leading-tight">
            {product.name}
          </CardTitle>
          <p className="mt-2 text-sm text-muted-foreground">{product.description}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="flex w-full items-center justify-between">
            <p className="text-lg font-semibold text-foreground">
              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.price)}
            </p>
            <Button variant="ghost" size="sm" className="text-accent-foreground">
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
