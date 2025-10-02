import { useAuthStore } from '@/features/auth';
import { FaRegMoon } from 'react-icons/fa';
import { LiaSunSolid } from 'react-icons/lia';

export function ThemeToggle() {
  const { theme, toggleTheme } = useAuthStore();
  return (
    <button onClick={toggleTheme} className='text-[--text-accent]'>
      {theme === 'light' ? <FaRegMoon /> : <LiaSunSolid size={20} />}
    </button>
  );
}
