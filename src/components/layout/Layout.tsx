import { Outlet } from 'react-router-dom';
import { NavBar, GlobalModalManager } from '@/components/layout';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className='flex min-h-screen flex-col'>
      <NavBar />
      <main className='flex-grow pt-14'>
        <Outlet />
      </main>
      <GlobalModalManager />
      <Footer />
    </div>
  );
}
