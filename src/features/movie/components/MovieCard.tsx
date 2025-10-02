import { getImageUrl } from '@/api';
import type { MovieCardType } from '@/features/movie/types/movie';
import { BookmarkIcon, HideIcon, LikeIcon } from '@/shared/ui';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  movie: MovieCardType;
  className?: string;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const IMAGE_BASE_URL = getImageUrl(movie.poster_path);
  return (
    <div className='centralize relative aspect-2/3 max-h-[500px] min-h-80 min-w-60 rounded-md p-4 shadow-md transition-opacity duration-300 ease-in-out'>
      <Link to={`/details/${movie.id}`}>
        <figure className='aspect-2/3 w-full overflow-hidden rounded-md'>
          <img
            src={`${IMAGE_BASE_URL}`}
            alt={movie.title}
            className='absolute inset-0 h-full w-full rounded-md object-cover object-center'
            loading='lazy'
          />
        </figure>
      </Link>
      <menu
        className='reaction-button-menu absolute bottom-0 left-0 flex h-1/6 w-full items-center justify-between px-2 pt-4'
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }}
      >
        <HideIcon id={movie.id} />
        <div className='flex gap-2'>
          <LikeIcon id={movie.id} />
          <BookmarkIcon id={movie.id} />
        </div>
      </menu>
    </div>
  );
}
