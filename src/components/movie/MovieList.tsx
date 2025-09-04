import type { MovieType } from '@/types/movie';
import { MovieCard } from './';

interface MovieListProps {
  movies: MovieType[];
}

export default function MovieList({ movies }: MovieListProps) {
  if (!movies || movies.length === 0) {
    return <div>표시할 영화가 없습니다.</div>;
  }

  return (
    <div className='mx-4 my-4 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4'>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
