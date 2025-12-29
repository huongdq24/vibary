import Image from 'next/image';
import Link from 'next/link';
import { collections, products, articles } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, MessageSquareQuote } from 'lucide-react';
import { ProductCard } from '@/components/product-card';

function HeroSection() {
  const heroProducts = products.slice(0, 3);
  return (
    <div className="w-full bg-white py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
                <Button asChild size="lg" className="bg-black text-white hover:bg-gray-800 rounded-none">
                    <Link href="/products">ĐẶT BÁNH NGAY</Link>
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {heroProducts.map(product => {
                     const image = PlaceHolderImages.find((p) => p.id === product.imageId);
                     return (
                        <Link href={`/products/${product.slug}`} key={product.id} className="group relative text-center">
                            {image && (
                                <Image
                                src={image.imageUrl}
                                alt={product.name}
                                width={600}
                                height={600}
                                className="object-cover w-full h-auto"
                                data-ai-hint={image.imageHint}
                                />
                            )}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                                <span className="bg-white/80 text-black px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                                    {product.name}
                                </span>
                            </div>
                        </Link>
                     )
                })}
            </div>
        </div>
    </div>
  );
}


function FeaturedCollections() {
  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl">Bộ Sưu Tập Nổi Bật</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Mỗi bộ sưu tập kể một câu chuyện. Tìm bộ sưu tập phù hợp với bạn.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection) => {
            const image = PlaceHolderImages.find((p) => p.id === collection.imageId);
            return (
              <Link href={`/products?collection=${collection.slug}`} key={collection.id} className="group relative">
                <Card className="overflow-hidden">
                  <div className="aspect-w-3 aspect-h-4">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={collection.title}
                      width={800}
                      height={600}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  </div>
                </Card>
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white">
                  <h3 className="font-headline text-2xl">{collection.title}</h3>
                  <p className="mt-2 text-sm">{collection.description}</p>
                   <Button variant="outline" className="mt-4 bg-transparent text-white border-white hover:bg-white hover:text-black">
                     Khám phá ngay
                   </Button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function NewArrivals() {
  const newProducts = products.slice(4, 8);
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl">Sản Phẩm Mới</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Tươi mới từ bếp bánh của chúng tôi, hãy khám phá những sáng tạo mới nhất.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {newProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}


export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedCollections />
      <NewArrivals />
    </>
  );
}
