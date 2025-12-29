import { products, collections } from "@/lib/data";
import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/product-card";

export default function ProductsPage({
  searchParams,
}: {
  searchParams?: { collection?: string };
}) {
  const collectionSlug = searchParams?.collection;
  
  let filteredProducts: Product[] = products;
  let pageTitle = "Tất Cả Sáng Tạo Của Chúng Tôi";
  let pageDescription = "Khám phá bộ sưu tập đầy đủ của chúng tôi về các loại bánh ngọt Pháp hiện đại.";

  if (collectionSlug) {
    const collection = collections.find(c => c.slug === collectionSlug);
    if (collection) {
      filteredProducts = products.filter(p => p.collection === collection.slug);
      pageTitle = collection.title;
      pageDescription = collection.description;
    }
  }

  return (
    <div className="bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="font-headline text-4xl md:text-5xl">{pageTitle}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {pageDescription}
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground">Không tìm thấy sản phẩm nào trong bộ sưu tập này.</p>
          </div>
        )}
      </div>
    </div>
  );
}
