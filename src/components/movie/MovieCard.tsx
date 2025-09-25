import { getImageUrl } from '@/utils';
import type { MovieCardType } from '@/types/movie';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  movie: MovieCardType;
  className?: string;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const IMAGE_BASE_URL = getImageUrl(movie.poster_path);
  return (
    <Link to={`/details/${movie.id}`}>
      <div className='centralize relative aspect-2/3 max-h-[500px] min-h-80 min-w-60 rounded-md p-4 shadow-md transition-opacity duration-300 ease-in-out'>
        <figure className='aspect-2/3 w-full overflow-hidden rounded-md'>
          <img
            src={`${IMAGE_BASE_URL}`}
            alt={movie.title}
            className='absolute inset-0 h-full w-full object-cover object-center'
            loading='lazy'
          />
        </figure>
      </div>
    </Link>
  );
}
