import type { MovieType } from '@/types/movie';
import { MovieCard } from './';
import useEmblaCarousel from 'embla-carousel-react';

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
            <div key={movie.id} className='relative flex-shrink-0 flex-grow-0 basis-60 md:basis-64'>
              <MovieCard key={movie.id} movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
