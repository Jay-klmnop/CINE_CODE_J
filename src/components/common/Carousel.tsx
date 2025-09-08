import useEmblaCarousel from 'embla-carousel-react';
import type { ReactNode } from 'react';

interface CarouselProps {
  items: ReactNode[];
}

export function Carousel({ items }: CarouselProps) {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps',
  });

  return (
    <div className='relative mx-4'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex gap-4'>
          {items.map((item, index) => (
            <div key={index} className='relative flex-shrink-0 flex-grow-0 basis-60 md:basis-64'>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
