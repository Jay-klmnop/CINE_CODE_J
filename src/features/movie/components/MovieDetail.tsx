import { getImageUrl } from '@/api';
import type { MovieDetailPageType } from '@/features/movie/types/movie';
import { FaStar } from 'react-icons/fa';

interface MovieDetailProps {
  movie: MovieDetailPageType;
}

export default function MovieDetail({ movie }: MovieDetailProps) {
  const POSTER_IMAGE_BASE_URL = getImageUrl(movie.poster_path);
  const BACKDROP_IMAGE_BASE_URL = getImageUrl(movie.backdrop_path);
  return (
    <section className='centralize mx-2 my-4 flex h-full w-full min-w-80 flex-col rounded-lg p-4 text-center text-xs transition-opacity duration-300 ease-in-out sm:flex-row sm:items-start sm:gap-4 sm:text-sm'>
      <article className='aspect-2/3 max-h-[640px] sm:min-w-2xs md:min-w-sm lg:min-w-md'>
        <img
          src={`${POSTER_IMAGE_BASE_URL}`}
          alt={movie.title}
          className='h-full w-full object-cover'
        />
      </article>
      <figure className='pointer-events-none absolute top-0 left-0 h-full w-full'>
        <img
          className='h-full object-center opacity-10'
          src={`${BACKDROP_IMAGE_BASE_URL}`}
          alt={movie.title}
        />
      </figure>
      <div className='flex flex-col items-center gap-6 px-2 pb-4 sm:items-start'>
        <div className='flex h-32 flex-col justify-evenly gap-3 sm:h-24 sm:justify-between sm:gap-6'>
          <h3 className='line-clamp text-3xl font-bold'>{movie.title}</h3>
          <div className='mx-auto flex items-center justify-evenly px-1'>
            <FaStar size={18} />
            <p className='flex h-full items-center pl-1 text-center text-lg leading-0 font-light'>
              {movie.vote_average}
            </p>
          </div>
        </div>
        <div className='flex gap-2'>
          {movie.genres.map((genre) => (
            <span key={genre.id} className='button genre px-2 py-1'>
              {genre.name}
            </span>
          ))}
        </div>
        <p className='text-left text-lg'>{movie.overview}</p>
      </div>
    </section>
  );
}
