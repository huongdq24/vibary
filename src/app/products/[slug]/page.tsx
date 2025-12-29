
"use client";

import { products } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCart } from "@/hooks/use-cart";
import { notFound } from "next/navigation";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const product = products.find((p) => p.slug === slug);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    notFound();
  }

  const image = PlaceHolderImages.find((p) => p.id === product.imageId);
  const priceToShow = product.price;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: priceToShow,
      imageId: product.imageId,
      slug: product.slug,
      quantity: quantity,
    });
    setQuantity(1); // Reset quantity after adding to cart
  };

  const collectionTitle = product.collection === 'half-entremet' ? 'BÁNH NỬA ENTREMET' : 
                          product.collection === 'baby-collection' ? 'BÁNH PETIT' :
                          'BÁNH ENTREMET';

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-2">
        <div className="aspect-square w-full overflow-hidden rounded-lg">
          {image && (
            <Image
              src={image.imageUrl}
              alt={product.name}
              width={800}
              height={800}
              className="h-full w-full object-cover"
              data-ai-hint={image.imageHint}
            />
          )}
        </div>
        <div className="flex flex-col pt-8">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">{collectionTitle}</p>
          <h1 className="font-headline text-6xl mt-2">{product.name}</h1>
          
          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center border rounded-md">
              <Button variant="ghost" size="icon" className="h-11 w-11" onClick={() => setQuantity(q => Math.max(1, q - 1))}>
                  <Minus className="h-4 w-4" />
              </Button>
              <Input type="number" value={quantity} readOnly className="h-11 w-12 border-0 text-center bg-transparent" />
              <Button variant="ghost" size="icon" className="h-11 w-11" onClick={() => setQuantity(q => q + 1)}>
                  <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button size="lg" onClick={handleAddToCart} className="flex-1 bg-black text-white hover:bg-black/80 rounded-md">
              THÊM VÀO GIỎ • {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(priceToShow)}
            </Button>
          </div>

          <div className="mt-10 space-y-6 border-t pt-8">
             <div>
                <h3 className="font-bold tracking-wider text-sm uppercase">{product.subtitle}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  {product.detailedDescription.flavor}
                </p>
            </div>
            
            {product.flavorProfile && (
                 <div>
                    <h3 className="font-bold tracking-wider text-sm uppercase">CẢM GIÁC BÁNH</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                        {product.flavorProfile.map(tag => (
                            <div key={tag} className="px-4 py-1.5 rounded-full border text-sm">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {product.structure && (
                 <div>
                    <h3 className="font-bold tracking-wider text-sm uppercase">CẤU TRÚC VỊ BÁNH</h3>
                    <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                        {product.structure.map((layer, index) => (
                           <div key={index} className="flex justify-between border-b pb-2">
                               <span>Lớp {String(index + 1).padStart(2, '0')}</span>
                               <span className="text-right text-foreground">{layer}</span>
                           </div>
                        ))}
                    </div>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
