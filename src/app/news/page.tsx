import { articles } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function NewsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="font-headline text-4xl md:text-5xl">Tin Tức & Câu Chuyện</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground font-fraunces">
          Từ hành trình của người sáng lập đến những góc nhìn hậu trường, hãy lặn sâu vào thế giới của VIBARY.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => {
          const image = PlaceHolderImages.find((p) => p.id === article.imageId);
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
                  <p className="text-sm text-muted-foreground">
                    {article.date} &bull; {article.category}
                  </p>
                  <CardTitle className="font-headline text-xl">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground font-fraunces">{article.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
