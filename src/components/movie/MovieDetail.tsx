import { IMAGE_BASE_URL } from '@/constants/url';
import type { MovieDetailPageType } from '@/types/movie';

interface MovieDetailProps {
  movie: MovieDetailPageType;
}

export default function MovieDetail({ movie }: MovieDetailProps) {
  return (
    <div className='mx-5 my-4 flex max-h-screen min-h-80 w-full min-w-60 flex-col items-center justify-center rounded-lg bg-white p-4 text-center text-xs shadow-md transition-opacity duration-300 ease-in-out lg:flex-row lg:justify-around lg:text-sm'>
      <img
        src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
        alt={movie.title}
        className='lg: h-full w-full overflow-hidden object-cover lg:min-w-xl'
      />
      <div className='flex flex-col items-center gap-6 px-2 pb-4 lg:items-start'>
        <div className='flex h-24 flex-col gap-3 pt-4 lg:gap-6'>
          <h3 className='text-4xl font-bold'>{movie.title}</h3>
          <p className='text-lg font-light'>★ {movie.vote_average}</p>
        </div>
        <div>
          {movie.genres.map((genre) => (
            <span key={genre.id} className='mr-2 rounded bg-gray-200 px-2 py-1'>
              {genre.name}
            </span>
          ))}
        </div>
        <p className='text-left text-lg'>{movie.overview}</p>
      </div>
    </div>
  );
}
