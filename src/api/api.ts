import { TMDB_API_BASE_URL, API_ENDPOINTS, TMDB_IMAGE_BASE_URL } from '@/shared/config';

export const getPopularMoviesUrl = (page: number = 1) => {
  return `${TMDB_API_BASE_URL}/${API_ENDPOINTS.POPULAR}?page=${page}`;
};

export const getMovieDetailsUrl = (id: string | number) => {
  if (!id) return null;
  return `${TMDB_API_BASE_URL}/movie/${id}`;
};

export const getImageUrl = (path: string) => {
  if (!path) return null;
  return `${TMDB_IMAGE_BASE_URL}${path}`;
};

export const getSearchUrl = (query: string, page: number = 1) => {
  const encodedQuery = encodeURIComponent(query);
  return `${TMDB_API_BASE_URL}/search/movie?query=${encodedQuery}&page=${page}`;
};
