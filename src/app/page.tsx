import Image from 'next/image';
import Link from 'next/link';
import { collections, products, articles } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, MessageSquareQuote } from 'lucide-react';
import { ProductCard } from '@/components/product-card';

function HeroSection() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-1');
  return (
    <div className="relative h-[60vh] min-h-[400px] w-full bg-primary/20">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <div className="container relative mx-auto flex h-full max-w-7xl flex-col items-start justify-end px-4 pb-12 text-white sm:px-6 lg:px-8">
        <h1 className="font-headline text-4xl leading-tight md:text-6xl lg:w-2/3">
          Modern French pastries, crafted for the Vietnamese palate.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-200">
          Discover the art of Entremet, where seasonal fruits and elegant designs
          come together in a symphony of flavor and texture.
        </p>
        <Button asChild size="lg" className="mt-6 bg-white text-black hover:bg-gray-200">
          <Link href="/products">Explore Collections</Link>
        </Button>
      </div>
    </div>
  );
}

function FeaturedCollections() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl">Featured Collections</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Each collection tells a story. Find the one that speaks to you.
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
                     Explore Now
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
  const newProducts = products.slice(0, 4);
  return (
    <section className="bg-primary/20 py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl">New Arrivals</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Fresh from our pastry kitchen, discover our latest creations.
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

function QuizCta() {
    const quizImage = PlaceHolderImages.find(p => p.id === 'quiz-banner');
  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card className="overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="relative hidden aspect-video lg:block">
            {quizImage && (
                <Image 
                    src={quizImage.imageUrl}
                    alt={quizImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={quizImage.imageHint}
                />
            )}
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <MessageSquareQuote className="h-10 w-10 text-accent" />
            <h2 className="mt-4 font-headline text-3xl">Lost in sweetness?</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Let us guide you. Take our quick flavor quiz to find the Entremet that's destined for you.
            </p>
            <div className="mt-6">
              <Button asChild size="lg">
                <Link href="/quiz">Start the Quiz <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

function NewsSection() {
    const latestArticles = articles.slice(0, 3);
    return (
        <section className="bg-primary/20 py-16 sm:py-24">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="font-headline text-3xl md:text-4xl">Hot News</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                        Stories from our kitchen, shopping tips, and sweet announcements.
                    </p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {latestArticles.map((article) => {
                        const image = PlaceHolderImages.find(p => p.id === article.imageId);
                        return (
                           <Link href={`/news/${article.slug}`} key={article.id}>
                                <Card className="h-full overflow-hidden transition-shadow hover:shadow-xl">
                                    {image && (
                                        <div className="aspect-w-16 aspect-h-9">
                                            <Image 
                                                src={image.imageUrl}
                                                alt={article.title}
                                                width={600}
                                                height={400}
                                                className="object-cover"
                                                data-ai-hint={image.imageHint}
                                            />
                                        </div>
                                    )}
                                    <CardHeader>
                                        <p className="text-sm text-muted-foreground">{article.date}</p>
                                        <CardTitle className="font-headline text-xl">{article.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">{article.excerpt}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
                <div className="mt-12 text-center">
                    <Button asChild variant="outline">
                        <Link href="/news">Read More Stories</Link>
                    </Button>
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
      <QuizCta />
      <NewsSection />
    </>
  );
}
