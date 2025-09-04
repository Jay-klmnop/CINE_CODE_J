import { useEffect, useMemo, useState } from 'react';
import { MovieDetail } from '@/components/movie';
import type { MovieDetailType } from '@/types/movie';
import { useParams } from 'react-router';
import { TMDB_ACCESS_TOKEN } from '@/constants';
import { useFetch } from '@/hooks/useFetch';
import { getMovieDetailsUrl } from '@/utils';

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

  if (loading && !movie) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='m-5 flex items-center justify-center'>
      {movie ? <MovieDetail key={movie.id} movie={movie} /> : <div>No Movie Found</div>}
    </div>
  );
}
