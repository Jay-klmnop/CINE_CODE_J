import { getImageUrl } from '@/utils';
import type { MovieDetailPageType } from '@/types/movie';
import { FaStar } from 'react-icons/fa';

interface MovieDetailProps {
  movie: MovieDetailPageType;
}

export default function MovieDetail({ movie }: MovieDetailProps) {
  const IMAGE_BASE_URL = getImageUrl(movie.poster_path);
  return (
    <section className='centralize my-4 flex max-h-5/6 min-h-80 w-full min-w-60 flex-col rounded-lg p-4 text-center text-xs shadow-md transition-opacity duration-300 ease-in-out lg:flex-row lg:justify-around lg:text-sm'>
      <article className='aspect-2/3 max-h-2/3 lg:w-xl'>
        <img src={`${IMAGE_BASE_URL}`} alt={movie.title} className='h-full w-full object-cover' />
      </article>
      <div className='flex flex-col items-center gap-6 px-2 pb-4 lg:items-start'>
        <div className='flex h-24 flex-col gap-3 pt-4 lg:gap-6'>
          <h3 className='text-4xl font-bold'>{movie.title}</h3>
          <div className='mx-auto flex items-center justify-evenly px-1'>
            <FaStar size={18} />
            <p className='flex h-full items-center pl-1 text-center text-lg leading-0 font-light'>
              {movie.vote_average}
            </p>
          </div>
        </div>
        <div className='flex gap-2'>
          {movie.genres.map((genre) => (
            <span key={genre.id} className='button main-button px-2 py-1 hover:bg-zinc-800'>
              {genre.name}
            </span>
          ))}
        </div>
        <p className='text-left text-lg'>{movie.overview}</p>
      </div>
    </section>
  );
}
