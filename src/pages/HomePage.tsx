import { useEffect, useMemo, useState } from 'react';
import { movieListData } from '@/data';
import { MovieList } from '@/components/movie';
import type { MovieType } from '@/types/movie';
import MovieCarousel from '@/components/movie/MovieCarousel';

export default function HomePage() {
  const [allMovies, setAllMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    setAllMovies(movieListData.results);
  }, []);

  const hollywoodMovies = useMemo(() => {
    return allMovies.filter((movie) => movie.original_language === 'en');
  }, [allMovies]);

  const internationalMovies = useMemo(() => {
    return allMovies.filter((movie) => movie.original_language !== 'en');
  }, [allMovies]);

  return (
    <div className='flex flex-col justify-center gap-5 p-4'>
      <div className='flex flex-col gap-5 py-2'>
        <div className='flex flex-col gap-5'>
          <h2 className='text-center text-4xl'>Hollywood Movies</h2>
          <MovieCarousel movies={hollywoodMovies} />
        </div>
        <div className='flex flex-col gap-5'>
          <h2 className='text-center text-4xl'>International Movies</h2>
          <MovieCarousel movies={internationalMovies} />
        </div>
      </div>
      <div>
        <h2 className='text-center text-4xl'>All Movies</h2>
        <MovieList movies={allMovies} />
      </div>
    </div>
  );
}
