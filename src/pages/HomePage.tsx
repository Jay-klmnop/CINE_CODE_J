import { useEffect, useState } from 'react';
import { movieListData } from '@/data';
import { MovieList } from '@/components/movie';
import type { MovieType } from '@/types/movie';

export default function HomePage() {
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    setMovies(movieListData.results);
  }, []);

  return <MovieList movies={movies} />;
}
