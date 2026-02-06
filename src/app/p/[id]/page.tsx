import PortfolioPageLayout from '@/components/PortfolioPageLayout';
import { portfolioPages } from '@/lib/portfolioData';

export function generateStaticParams() {
    return portfolioPages
        .filter((p) => p.id !== 1)
        .map((p) => ({
            id: p.id.toString(),
        }));
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const pageId = parseInt(id, 10);

    // Basic validation/fallback although generateStaticParams handles build time
    const isValid = portfolioPages.some(p => p.id === pageId);
    if (!isValid) return <div>Page not found</div>;

    return <PortfolioPageLayout pageId={pageId} />;
}
