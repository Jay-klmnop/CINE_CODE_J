import { useEffect, useMemo, useState } from 'react';
import { MovieList } from '@/components/movie';
import type { MovieType } from '@/types/movie';
import MovieCarousel from '@/components/movie/MovieCarousel';
import { useFetch } from '@/hooks/useFetch';
import { TMDB_ACCESS_TOKEN } from '@/constants';
import { getPopularMoviesUrl } from '@/utils';

interface TmdbApiResponse {
  results: MovieType[];
}

export default function HomePage() {
  const [allMovies, setAllMovies] = useState<MovieType[]>([]);
  const API_URL = getPopularMoviesUrl();

  const fetchOptions = useMemo(
    () => ({
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
      },
    }),
    []
  );

  const { data, loading, error } = useFetch<TmdbApiResponse>(API_URL, fetchOptions);

  useEffect(() => {
    if (data && data.results) {
      const filteredMovies = data?.results.filter((movie) => !movie.adult);
      setAllMovies(filteredMovies);
    }
  }, [data]);

  const highlyRatedMovies = useMemo(() => {
    return allMovies.filter((movie) => movie.vote_average >= 7);
  }, [allMovies]);

  if (loading && allMovies.length === 0) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='flex flex-col justify-center gap-6 p-4'>
      <div className='flex flex-col gap-5'>
        <h2 className='px-4 text-4xl'>Highly-Rated Movies</h2>
        <MovieCarousel movies={highlyRatedMovies} />
      </div>
      <div>
        <h2 className='px-4 text-4xl'>Popular Movies</h2>
        {allMovies.length > 0 ? <MovieList movies={allMovies} /> : <div>No movies found</div>}
      </div>
    </div>
  );
}
