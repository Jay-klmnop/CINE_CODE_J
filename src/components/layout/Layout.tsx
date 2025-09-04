import { Outlet } from 'react-router-dom';
import { NavBar } from '@/components/layout';

export default function Layout() {
  return (
    <div className='flex min-h-screen flex-col bg-gray-100 font-sans font-semibold'>
      <NavBar />
      <main className='flex-grow'>
        <Outlet />
      </main>
    </div>
  );
}
