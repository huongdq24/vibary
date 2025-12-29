import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const placeholder = PlaceHolderImages.find((p) => p.id === product.imageId);

  return (
    <Card className="group relative flex h-full flex-col overflow-hidden border-0 shadow-none">
      <Link href={`/products/${product.slug}`} className="flex flex-col h-full text-center">
        <CardHeader className="p-0">
          <div className="aspect-square w-full overflow-hidden">
            {placeholder && (
              <Image
                src={placeholder.imageUrl}
                alt={product.name}
                width={600}
                height={600}
                className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                data-ai-hint={placeholder.imageHint}
              />
            )}
          </div>
        </CardHeader>
        <CardContent className="absolute bottom-4 right-4">
          <CardTitle className="font-body text-xs uppercase tracking-widest bg-white/80 text-black px-3 py-1.5 rounded-full border border-black/20 backdrop-blur-sm">
            {product.name}
          </CardTitle>
        </CardContent>
      </Link>
    </Card>
  );
}
