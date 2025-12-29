
import { products } from "@/lib/data";
import ProductDetailClient from './product-detail-client';

// Server component to fetch slug and pass to client component
export default function ProductDetailPage({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    return <ProductDetailClient slug={slug} />;
}

// Re-generate static paths
export async function generateStaticParams() {
    return products.map(product => ({
        slug: product.slug
    }))
}
