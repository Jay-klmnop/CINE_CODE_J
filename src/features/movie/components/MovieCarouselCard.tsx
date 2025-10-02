import { getImageUrl } from '@/api';
import type { MovieCarouselType } from '@/features/movie';
import { Link } from 'react-router-dom';

interface MovieCarouselCardProps {
  movie: MovieCarouselType;
  className?: string;
}

export default function MovieCarouselCard({ movie }: MovieCarouselCardProps) {
  const IMAGE_BASE_URL = getImageUrl(movie.backdrop_path);
  return (
    <Link to={`/details/${movie.id}`}>
      <div className='centralize relative aspect-video h-full w-full rounded-md p-4 transition-opacity duration-300 ease-in-out'>
        <figure className='aspect-video w-full overflow-hidden rounded-md'>
          <img
            src={`${IMAGE_BASE_URL}`}
            alt={movie.title}
            className='absolute inset-0 h-full w-full rounded-md object-cover object-center'
            loading='lazy'
          />
          <div className='absolute inset-0 rounded-md bg-black/30' />
          <div className='absolute bottom-6 left-6 pr-6 text-white'>
            <h2 className='text-xl font-bold sm:text-3xl md:text-2xl'>{movie.title}</h2>
            <p className='mt-1 line-clamp-1 text-sm opacity-80 sm:line-clamp-2'>{movie.overview}</p>
          </div>
        </figure>
      </div>
    </Link>
  );
}
