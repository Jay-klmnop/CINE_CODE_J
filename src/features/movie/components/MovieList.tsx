import type { MovieType } from '@/features/movie/types/movie';
import { MovieCard } from '.';
import { useMovieStore } from '@/shared/store';

interface MovieListProps {
  movies: MovieType[];
}

export default function MovieList({ movies }: MovieListProps) {
  const { hiddenMovies } = useMovieStore();
  const visibleMovies = movies.filter((m) => !hiddenMovies.includes(m.id));

  if (!visibleMovies || visibleMovies.length === 0) {
    return <div>No Movies to display.</div>;
  }

  return (
    <div className='mx-4 my-4 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4'>
      {visibleMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
