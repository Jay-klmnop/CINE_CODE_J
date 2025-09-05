import { TMDB_API_BASE_URL, API_ENDPOINTS, TMDB_IMAGE_BASE_URL } from '@/constants';

export const getPopularMoviesUrl = () => {
  return `${TMDB_API_BASE_URL}/${API_ENDPOINTS.POPULAR}`;
};

export const getMovieDetailsUrl = (id: string | number) => {
  if (!id) return null;
  return `${TMDB_API_BASE_URL}/movie/${id}`;
};

export const getImageUrl = (path: string) => {
  if (!path) return null;
  return `${TMDB_IMAGE_BASE_URL}${path}`;
};
