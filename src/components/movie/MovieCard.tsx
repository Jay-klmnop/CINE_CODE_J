import { getImageUrl } from '@/utils';
import type { MovieCardType } from '@/types/movie';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

interface MovieCardProps {
  movie: MovieCardType;
  className?: string;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const IMAGE_BASE_URL = getImageUrl(movie.poster_path);
  return (
    <Link to={`/details/${movie.id}`}>
      <div className='flex aspect-2/3 max-h-[500px] min-h-80 min-w-60 flex-col items-center gap-2 rounded-lg bg-white p-4 text-xs shadow-md transition-opacity duration-300 ease-in-out'>
        <figure className='relative aspect-4/5 w-full overflow-hidden rounded-lg'>
          <img
            src={`${IMAGE_BASE_URL}`}
            alt={movie.title}
            className='absolute inset-0 h-full w-full object-cover object-center'
          />
        </figure>
        <div className='w-full'>
          <h3 className='h-14 text-left text-lg font-bold'>{movie.title}</h3>
          <div className='flex items-center justify-end gap-2'>
            <FaStar size={16} />
            <p className='h-5 text-right text-sm font-light'>{movie.vote_average}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
