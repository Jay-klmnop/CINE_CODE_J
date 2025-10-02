import type { MovieApiResponse, MovieType } from '@/features/movie/types/movie';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useFetch, useIntersectionObserver } from '@/hooks';
import { TMDB_ACCESS_TOKEN } from '@/shared/config';
import { getPopularMoviesUrl } from '@/api';
import { SwitchCase } from '@/components/common';
import { CarouselSkeleton, ListSkeleton } from '@/components/ui';
import { MovieCarousel, MovieList } from '@/features/movie';

export default function HomePage() {
  const [allMovies, setAllMovies] = useState<MovieType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const API_URL = getPopularMoviesUrl(currentPage);

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

  const { data, loading, error } = useFetch<MovieApiResponse>(API_URL, fetchOptions);

  useEffect(() => {
    if (data?.results) {
      const filteredMovies = data.results.filter((movie) => !movie.adult);
      setAllMovies((prevMovies) => {
        const existingIds = new Set(prevMovies.map((m) => m.id));
        const newMovies = filteredMovies.filter((m) => !existingIds.has(m.id));
        return [...prevMovies, ...newMovies];
      });
    }
  }, [data]);

  const handleLoadMore = useCallback(() => {
    if (!loading && data && data.page < data.total_pages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }, [loading, data]);

  const { ref: loadMoreRef } = useIntersectionObserver({ onIntersect: handleLoadMore });

  const highlyRatedMovies = useMemo(() => {
    return allMovies.filter((movie) => movie.vote_average >= 7);
  }, [allMovies]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const status = loading && allMovies.length === 0 ? 'loading' : 'success';

  return (
    <div className='flex flex-col justify-center gap-6 p-4'>
      <SwitchCase
        value={status}
        caseBy={{ loading: <CarouselSkeleton /> }}
        defaultComponent={<MovieCarousel movies={highlyRatedMovies} />}
      />
      <div>
        <h2 className='px-4 text-4xl'>Popular Movies</h2>
        <SwitchCase
          value={status}
          caseBy={{ loading: <ListSkeleton /> }}
          defaultComponent={
            allMovies.length > 0 ? <MovieList movies={allMovies} /> : <div>No movies found</div>
          }
        />
        {!loading && <div ref={loadMoreRef} style={{ height: '50px' }} />}
        {loading && allMovies.length > 0 && <ListSkeleton />}
      </div>
    </div>
  );
}
