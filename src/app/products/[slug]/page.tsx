

'use client';
import ProductDetailClient from './product-detail-client';
import { useAppStore } from '@/hooks/use-cart';

// Server component to fetch slug and pass to client component
export default function ProductDetailPage({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    return <ProductDetailClient slug={slug} />;
}

// Re-generate static paths
export function generateStaticParams() {
    const { products } = useAppStore();
    return products.map(product => ({
        slug: product.slug
    }))
}
