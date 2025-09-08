import { Carousel } from '@/components/common';
import { CardSkeleton } from './CardSkeleton';

export function CarouselSkeleton({ count = 8 }: { count?: number }) {
  return (
    <Carousel
      items={Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    />
  );
}
