import { MovieList } from '@/components/movie';
import { useSearchParams } from 'react-router-dom';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { TMDB_ACCESS_TOKEN } from '@/constants';
import { getSearchUrl } from '@/utils/api';
import { useFetch } from '@/hooks/useFetch';
import { ErrorBoundary } from '@suspensive/react';
import { ListSkeleton } from '@/components/skeleton';
import type { MovieApiResponse, MovieType } from '@/types/movie';
import { useIntersectionObserver } from '@/hooks';
import { SwitchCase } from '@/components/common';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const [searchedMovies, setSearchedMovies] = useState<MovieType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const query = searchParams.get('q');

  const API_URL = query ? getSearchUrl(query, currentPage) : null;

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
      setSearchedMovies((prevMovies) => {
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

  if (error) throw error;

  const status = loading && searchedMovies.length === 0 ? 'loading' : 'success';

  return (
    <ErrorBoundary fallback={({ error }) => <div>Error: {error.message}</div>}>
      <SwitchCase
        value={status}
        caseBy={{ loading: <ListSkeleton /> }}
        defaultComponent={
          searchedMovies.length > 0 ? (
            <MovieList movies={searchedMovies} />
          ) : (
            <div>No movies found</div>
          )
        }
      />
      {!loading && <div ref={loadMoreRef} style={{ height: '50px' }} />}
      {loading && searchedMovies.length > 0 && <ListSkeleton />}
    </ErrorBoundary>
  );
}
