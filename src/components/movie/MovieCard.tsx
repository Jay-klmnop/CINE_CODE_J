import type { MovieCardType } from '@/types/movie';
import { IMAGE_BASE_URL } from '@/constants/url';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  movie: MovieCardType;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link to='/details'>
      <div className='flex aspect-3/5 max-h-[500px] min-h-80 min-w-60 flex-col items-center gap-2 rounded-lg bg-white p-4 text-xs shadow-md transition-opacity duration-300 ease-in-out'>
        <img
          src={`${IMAGE_BASE_URL}${movie.poster_path}`}
          alt={movie.title}
          className='aspect-4/5 h-full w-full overflow-hidden object-cover'
        />
        <div className='w-full'>
          <h3 className='text-left text-xl font-bold'>{movie.title}</h3>
          <p className='text-right text-lg font-light'>★ {movie.vote_average}</p>
        </div>
      </div>
    </Link>
  );
}
