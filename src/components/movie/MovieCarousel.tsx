import type { MovieType } from '@/types/movie';
import { MovieCard } from './';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';

interface MovieCarouselProps {
  movies: MovieType[];
}

const PrevButton = (props: { onClick: () => void }) => (
  <button
    onClick={props.onClick}
    className='h-10 w-10 rounded-full bg-gray-300 text-center text-2xl leading-none font-black hover:cursor-pointer hover:bg-gray-100 active:bg-white'
  >
    {'<'}
  </button>
);
const NextButton = (props: { onClick: () => void }) => (
  <button
    onClick={props.onClick}
    className='h-10 w-10 rounded-full bg-gray-300 text-center text-2xl leading-none font-black hover:cursor-pointer hover:bg-gray-100 active:bg-white'
  >
    {'>'}
  </button>
);

export default function MovieCarousel({ movies }: MovieCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 2,
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className='relative mx-auto max-w-7xl'>
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          {movies.map((movie) => (
            <div key={movie.id} className='min-w-0 flex-[0_0_25%] pl-4'>
              <MovieCard key={movie.id} movie={movie} />
            </div>
          ))}
        </div>
      </div>
      <div className='absolute top-1/2 flex w-full -translate-y-1/2 justify-between px-4'>
        <PrevButton onClick={scrollPrev} />
        <NextButton onClick={scrollNext} />
      </div>
    </div>
  );
}
