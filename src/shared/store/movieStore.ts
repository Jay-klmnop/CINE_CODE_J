import { create } from 'zustand';

interface MovieState {
  bookmarkedMovies: number[];
  likedMovies: number[];
  hiddenMovies: number[];
  toggleBookmarked: (id: number) => void;
  toggleLiked: (id: number) => void;
  toggleHidden: (id: number) => void;
}

export const useMovieStore = create<MovieState>((set) => ({
  bookmarkedMovies: [],
  likedMovies: [],
  hiddenMovies: [],
  toggleBookmarked: (id) =>
    set((state) => ({
      bookmarkedMovies: state.bookmarkedMovies.includes(id)
        ? state.bookmarkedMovies.filter((m) => m !== id)
        : [...state.bookmarkedMovies, id],
    })),
  toggleLiked: (id) =>
    set((state) => ({
      likedMovies: state.likedMovies.includes(id)
        ? state.likedMovies.filter((m) => m !== id)
        : [...state.likedMovies, id],
    })),
  toggleHidden: (id) =>
    set((state) => ({
      hiddenMovies: state.hiddenMovies.includes(id)
        ? state.hiddenMovies.filter((m) => m !== id)
        : [...state.hiddenMovies, id],
    })),
}));
