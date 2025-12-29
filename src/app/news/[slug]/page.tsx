
import { articles } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const image = PlaceHolderImages.find((p) => p.id === article.imageId);

  return (
    <article>
      <header className="relative h-[50vh] min-h-[300px] w-full">
        {image && (
          <Image
            src={image.imageUrl}
            alt={article.title}
            fill
            className="object-cover"
            priority
            data-ai-hint={image.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
        <div className="container relative mx-auto flex h-full max-w-4xl flex-col justify-end px-4 py-12 text-white sm:px-6 lg:px-8">
            <p className="text-lg font-medium text-gray-300">{article.category} &bull; {article.date}</p>
            <h1 className="mt-2 font-headline text-4xl leading-tight md:text-5xl">
                {article.title}
            </h1>
        </div>
      </header>

      <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div
          className="prose prose-lg max-w-none prose-h2:font-headline prose-p:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </article>
  );
}

export async function generateStaticParams() {
    return articles.map(article => ({
        slug: article.slug
    }))
}
