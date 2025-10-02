import { create } from 'zustand';
import type { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/api';

type ModalType = 'signin' | 'signup' | null;
type ThemeType = 'light' | 'dark';

interface AuthState {
  session: Session | null;
  user: User | null;
  isLoading: boolean;
  modalType: ModalType;
  theme: ThemeType;
  openModal: (type: 'signin' | 'signup') => void;
  closeModal: () => void;
  toggleTheme: () => void;
  initialize: () => () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  session: null,
  user: null,
  isLoading: true,
  modalType: null,
  theme: 'light',
  openModal: (type) => set({ modalType: type }),
  closeModal: () => set({ modalType: null }),
  toggleTheme: () => {
    const newTheme = get().theme === 'light' ? 'dark' : 'light';
    set({ theme: newTheme });
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },
  initialize: () => {
    const storedTheme = localStorage.getItem('theme') as ThemeType | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
    set({ theme: initialTheme });
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }

    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      set({ session, user: session?.user ?? null, isLoading: false });
    };

    getSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      set({ session, user: session?.user ?? null });
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  },
}));

useAuthStore.getState().initialize();
