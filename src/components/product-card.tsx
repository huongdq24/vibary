
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const placeholder = PlaceHolderImages.find((p) => p.id === product.imageIds[0]);
  const priceToShow = product.sizes ? product.sizes[0].price : product.price;

  return (
    <Card className="group flex h-full flex-col overflow-hidden border-0 shadow-none bg-transparent rounded-none">
      <Link href={`/products/${product.slug}`} className="flex flex-col h-full text-center">
        <div className="p-4">
            <h3 className="font-headline text-lg uppercase tracking-wider">{product.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
            <p className="font-medium mt-2">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(priceToShow)}
            </p>
        </div>
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
        </div>
        <div className="p-4 border-t border-transparent group-hover:border-foreground/20 transition-colors">
            <span className="text-sm text-foreground group-hover:font-semibold">Xem chi tiết</span>
        </div>
      </Link>
    </Card>
  );
}
