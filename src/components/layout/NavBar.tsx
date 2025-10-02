import { Logo, SearchInput } from '@/components/common';
import { useAuthStore } from '@/features/auth/store';
import { supabase } from '@/api';
import { ThemeToggle } from '@/components/common';

export default function NavBar() {
  const { user, openModal } = useAuthStore();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className='header fixed z-50 flex h-14 w-full items-center justify-between px-5 py-2 whitespace-nowrap'>
      <Logo />
      <div className='flex flex-1 items-center justify-end gap-4'>
        <SearchInput />
        <ThemeToggle />
        <div className='centralize gap-2 text-xs'>
          {user ? (
            <button onClick={handleLogout} className='button main-button h-8 w-20'>
              Sign Out
            </button>
          ) : (
            <>
              <button onClick={() => openModal('signin')} className='button main-button h-8 w-20'>
                Sign In
              </button>
              <button onClick={() => openModal('signup')} className='button main-button h-8 w-20'>
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
