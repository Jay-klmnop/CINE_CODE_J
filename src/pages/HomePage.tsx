import type { MovieType } from '@/types/movie';
import { useEffect, useMemo, useState } from 'react';
import { MovieList } from '@/components/movie';
import { MovieCarousel } from '@/components/movie';
import { useFetch } from '@/hooks/useFetch';
import { TMDB_ACCESS_TOKEN } from '@/constants';
import { getPopularMoviesUrl } from '@/utils';
import { MovieCardSkeleton } from '@/components/skeleton/MovieCardSkeleton';
import { SwitchCase } from '@/components/common';
import { Carousel } from '@/components/common';

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

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const status = loading && allMovies.length === 0 ? 'loading' : 'success';

  return (
    <div className='flex flex-col justify-center gap-6 p-4'>
      <div className='flex flex-col gap-5'>
        <h2 className='px-4 text-4xl'>Highly-Rated Movies</h2>
        <SwitchCase
          value={status}
          caseBy={{
            loading: (
              <Carousel
                items={Array.from({ length: 5 }).map((_, i) => (
                  <MovieCardSkeleton key={i} />
                ))}
              />
            ),
          }}
          defaultComponent={<MovieCarousel movies={highlyRatedMovies} />}
        />
      </div>
      <div>
        <h2 className='px-4 text-4xl'>Popular Movies</h2>
        <SwitchCase
          value={status}
          caseBy={{
            loading: (
              <div className='mx-4 my-4 grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4'>
                {Array.from({ length: 8 }).map((_, i) => (
                  <MovieCardSkeleton key={i} />
                ))}
              </div>
            ),
          }}
          defaultComponent={
            allMovies.length > 0 ? <MovieList movies={allMovies} /> : <div>No movies found</div>
          }
        />
      </div>
    </div>
  );
}
