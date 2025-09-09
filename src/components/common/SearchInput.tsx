import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDebounce } from '@/hooks';

export function SearchInput() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    const queryString = debouncedSearchTerm;
    if (debouncedSearchTerm && location.search !== `?${queryString}`) {
      navigate(`/search?q=${queryString}`);
    }
  }, [debouncedSearchTerm, navigate, location.search]);

  return (
    <div className='relative mx-4 flex flex-1 rounded bg-white'>
      <FaSearch className='absolute top-2 left-2' size={16} />
      <input
        type='text'
        className='flex h-8 flex-1 rounded pl-7 focus:ring-0 focus:outline-none'
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </div>
  );
}
