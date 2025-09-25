import { Outlet } from 'react-router-dom';
import { NavBar, GlobalModalManager } from '@/components/layout';

export default function Layout() {
  return (
    <div className='flex min-h-screen flex-col font-sans font-semibold'>
      <NavBar />
      <main className='flex-grow pt-14'>
        <Outlet />
      </main>
      <GlobalModalManager />
    </div>
  );
}
