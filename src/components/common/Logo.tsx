import { RiMovie2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to='/' className='flex justify-center'>
      <h1 className='text-lg font-black'>FliQ</h1>
      <RiMovie2Fill />
    </Link>
  );
}
