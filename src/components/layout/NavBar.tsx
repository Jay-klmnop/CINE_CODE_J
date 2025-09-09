import { Logo, SearchInput } from '../common';

export default function NavBar() {
  return (
    <header className='fixed z-50 flex h-16 w-full items-center justify-between bg-black px-5 py-2 whitespace-nowrap'>
      <Logo />
      <SearchInput />
      <div className='flex items-center justify-center gap-2 text-center text-xs'>
        <button className='h-7 w-12 rounded border bg-gray-100 leading-none'>login</button>
        <button className='h-7 w-12 rounded border bg-gray-100 leading-none'>signup</button>
      </div>
    </header>
  );
}
