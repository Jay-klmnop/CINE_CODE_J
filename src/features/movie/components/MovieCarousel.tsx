import type { MovieType } from '@/features/movie';
import useEmblaCarousel from 'embla-carousel-react';
import { MovieCarouselCard } from '@/features/movie';

interface MovieCarouselProps {
  movies: MovieType[];
}

export default function MovieCarousel({ movies }: MovieCarouselProps) {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: true,
    containScroll: 'trimSnaps',
  });

  return (
    <div className='relative mx-4'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex gap-4'>
          {movies.map((movie) => (
            <div
              key={movie.id}
              className='embla__slide relative flex-[0_0_100%] flex-shrink-0 flex-grow-0 px-2'
            >
              <MovieCarouselCard key={movie.id} movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
