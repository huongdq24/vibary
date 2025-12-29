"use client";

import { products } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useCart } from "@/hooks/use-cart";
import { notFound } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ShoppingCart } from "lucide-react";

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(
    product?.sizes ? product.sizes[0] : undefined
  );

  if (!product) {
    notFound();
  }

  const image = PlaceHolderImages.find((p) => p.id === product.imageId);
  const priceToShow = selectedSize ? selectedSize.price : product.price;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: priceToShow,
      imageId: product.imageId,
      slug: product.slug,
      size: selectedSize?.name,
    });
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="aspect-square w-full overflow-hidden rounded-lg shadow-lg">
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
        <div className="flex flex-col justify-center">
          <h1 className="font-headline text-4xl md:text-5xl">{product.name}</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {product.description}
          </p>
          <p className="mt-6 text-3xl font-bold text-foreground">
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(priceToShow)}
          </p>

          <div className="mt-8 space-y-6">
            {product.sizes && selectedSize && (
              <div>
                <label className="text-sm font-medium text-foreground">
                  Kích thước
                </label>
                <Select
                  defaultValue={selectedSize.name}
                  onValueChange={(value) => {
                    const newSize = product.sizes?.find(
                      (s) => s.name === value
                    );
                    setSelectedSize(newSize);
                  }}
                >
                  <SelectTrigger className="mt-2 w-full md:w-2/3">
                    <SelectValue placeholder="Chọn một kích thước" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.sizes.map((size) => (
                      <SelectItem key={size.name} value={size.name}>
                        {size.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            <Button size="lg" onClick={handleAddToCart} className="w-full md:w-2/3">
              <ShoppingCart className="mr-2 h-5 w-5" /> Thêm vào giỏ hàng
            </Button>
          </div>

          <div className="mt-10">
            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-headline text-lg">
                  Hồ Sơ Hương Vị
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {product.detailedDescription.flavor}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="font-headline text-lg">
                  Thành phần
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {product.detailedDescription.ingredients}
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="font-headline text-lg">
                  Phục Vụ & Bảo Quản
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <p>{product.detailedDescription.serving}</p>
                  <p className="mt-2">{product.detailedDescription.storage}</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
