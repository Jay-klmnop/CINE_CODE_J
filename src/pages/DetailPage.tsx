import { useEffect, useState } from 'react';
import { movieDetailData } from '@/data';
import { MovieDetail } from '@/components/movie';
import type { MovieDetailType } from '@/types/movie';

export default function DetailPage() {
  const [movieDetail, setMovieDetail] = useState<MovieDetailType[]>([]);

  useEffect(() => {
    setMovieDetail([movieDetailData]);
  }, []);

  return (
    <div className='m-5 flex items-center justify-center'>
      {movieDetail.map((movie) => (
        <MovieDetail key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
