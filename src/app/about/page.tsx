import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
    const bannerImage = PlaceHolderImages.find(p => p.id === 'about-banner');

    return (
        <div>
            <header className="relative h-[50vh] min-h-[300px] w-full">
                {bannerImage && (
                    <Image
                        src={bannerImage.imageUrl}
                        alt={bannerImage.description}
                        fill
                        className="object-cover"
                        priority
                        data-ai-hint={bannerImage.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
                <div className="container relative mx-auto flex h-full max-w-4xl flex-col justify-center text-center text-white px-4 sm:px-6 lg:px-8">
                    <h1 className="font-headline text-4xl leading-tight md:text-6xl">
                        A Love Letter to Pastry
                    </h1>
                </div>
            </header>

            <div className="container mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <div className="prose prose-lg mx-auto max-w-none prose-h2:font-headline prose-p:text-muted-foreground prose-blockquote:border-accent prose-blockquote:text-accent prose-blockquote:font-headline">
                    <h2>The Dream</h2>
                    <p>
                        The story of Entremet Hanoi begins not in a grand patisserie, but in a small, sunlit kitchen in the heart of Hanoi. Our founder, Lan, discovered her passion for French pastry during a year spent studying in Paris. She was mesmerized by the artistry, the precision, and the delicate balance of flavors in every entremet she tasted.
                    </p>
                    <p>
                        Upon returning to Vietnam, she dreamt of bringing that magic home, but with a unique Vietnamese twist. She wanted to create cakes that felt both foreign and familiar, sophisticated and comforting.
                    </p>

                    <blockquote>
                        "I wanted to capture the elegance of Paris and infuse it with the soul of Hanoi."
                    </blockquote>

                    <h2>The Craft</h2>
                    <p>
                        Lan spent years perfecting her craft, tirelessly experimenting with local, seasonal fruits like lychee, passion fruit, and mango. She meticulously adjusted sweetness levels to suit the local palate, finding the perfect harmony between French technique and Vietnamese ingredients.
                    </p>
                    <p>
                        Entremet Hanoi is the culmination of that dream—a celebration of technique, creativity, and the freshest ingredients our beautiful country has to offer. Each cake is a testament to patience, a labor of love, and a piece of our story, shared with you.
                    </p>
                </div>
            </div>
        </div>
    );
}
