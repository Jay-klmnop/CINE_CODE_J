import { useEffect, useMemo, useState } from 'react';
import { MovieDetail } from '@/components/movie';
import type { MovieDetailType } from '@/types/movie';
import { useParams } from 'react-router';
import { TMDB_ACCESS_TOKEN } from '@/constants';
import { useFetch } from '@/hooks/useFetch';
import { getMovieDetailsUrl } from '@/utils';
import { ErrorBoundary } from '@suspensive/react';
import { MovieDetailSkeleton } from '@/components/skeleton/MovieDetailSkeleton';

export default function DetailPage() {
  const [movie, setMovie] = useState<MovieDetailType | null>(null);
  const { id } = useParams<{ id: string }>();
  const API_URL = id ? getMovieDetailsUrl(id) : null;

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

  const { data, loading, error } = useFetch<MovieDetailType>(API_URL, fetchOptions);

  useEffect(() => {
    if (data) {
      setMovie(data);
    }
  }, [data]);

  if (loading && !movie) return <MovieDetailSkeleton />;
  if (error) throw error;

  return (
    <ErrorBoundary fallback={({ error }) => <div>Error: {error.message}</div>}>
      {movie && <MovieDetail movie={movie} />}
    </ErrorBoundary>
  );
}
