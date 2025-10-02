import { useState } from 'react';
import type React from 'react';
import { RiThumbDownLine, RiThumbUpFill, RiThumbUpLine } from 'react-icons/ri';
import { RxBookmark, RxBookmarkFilled } from 'react-icons/rx';
import { useMovieStore } from '@/shared/store';
import toast from 'react-hot-toast';
import Tippy from '@tippyjs/react';

interface IconProps {
  id: number;
}

export function BookmarkIcon({ id }: IconProps) {
  const { bookmarkedMovies, toggleBookmarked } = useMovieStore();
  const isBookmarked = bookmarkedMovies.includes(id);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    toggleBookmarked(id);
    toast.success(isBookmarked ? 'Removed from Bookmarks' : 'Added to Bookmarks');
  };

  return (
    <Tippy content={isBookmarked ? 'Remove Bookmark' : 'Bookmark'}>
      <button className='cursor-pointer' onClick={handleClick}>
        {isBookmarked ? <RxBookmarkFilled size={20} /> : <RxBookmark size={20} />}
      </button>
    </Tippy>
  );
}

export function LikeIcon({ id }: IconProps) {
  const { likedMovies, toggleLiked } = useMovieStore();
  const isLiked = likedMovies.includes(id);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    toggleLiked(id);
    toast.success(isLiked ? 'Removed from Liked Movies' : 'Added to Liked Movies');
  };

  return (
    <Tippy content={isLiked ? 'Unlike' : 'Like'}>
      <button className='cursor-pointer' onClick={handleClick}>
        {isLiked ? <RiThumbUpFill size={20} /> : <RiThumbUpLine size={20} />}
      </button>
    </Tippy>
  );
}

export function HideIcon({ id }: IconProps) {
  const { hiddenMovies, toggleHidden } = useMovieStore();
  const isHidden = hiddenMovies.includes(id);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleHide = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    toggleHidden(id);
    setShowConfirm(false);
    toast.success('Movie hidden from list');
  };

  if (isHidden) return null;

  return (
    <>
      <Tippy content='Hide Movie'>
        <button
          className='cursor-pointer'
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setShowConfirm(true);
          }}
        >
          <RiThumbDownLine size={20} />
        </button>
      </Tippy>
      {showConfirm && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'
          onClick={() => setShowConfirm(false)}
        >
          <div className='modal rounded-md p-6' onClick={(e) => e.stopPropagation()}>
            <p>Are you sure you want to hide this film from the list?</p>
            <div className='mt-4 flex justify-end gap-4'>
              <button
                className='cursor-pointer rounded-md px-4 py-2'
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </button>
              <button
                className='cursor-pointer rounded-md bg-red-500 px-4 py-2 text-white'
                onClick={(e) => {
                  handleHide(e);
                }}
              >
                Hide
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
