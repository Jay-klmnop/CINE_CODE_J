import { useState } from 'react';
import { supabase } from '@/utils';
import { useAuthStore } from '@/stores';
import { Modal } from '@/shared/ui';
import type { Provider } from '@supabase/supabase-js';

const SigninModal = () => {
  const { modalType, closeModal, openModal } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      closeModal();
    }
  };

  const handleOAuthSignin = async (provider: Provider) => {
    const { error } = await supabase.auth.signInWithOAuth({ provider });
    if (error) {
      setError(error.message);
    }
  };

  return (
    <Modal isOpen={modalType === 'signin'} onClose={closeModal} title='Sign In'>
      <form onSubmit={handleSignin} className='space-y-4'>
        <input
          type='email'
          placeholder='example@address.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='input account-input'
          required
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='input account-input'
          required
        />
        {error && <p className='text-sm text-red-500'>{error}</p>}
        <button type='submit' className='button main-button w-full p-2'>
          Sign In
        </button>
      </form>

      <div className='sub-text my-4 text-center text-sm'>OR</div>

      <div className='space-y-2'>
        <button
          onClick={() => handleOAuthSignin('google')}
          className='button side-button w-full p-2'
        >
          Sign In with Google
        </button>
        <button
          onClick={() => handleOAuthSignin('github')}
          className='button side-button w-full p-2'
        >
          Sign In with GitHub
        </button>
      </div>

      <div className='sub-text mt-6 text-center text-sm'>
        No Account?{' '}
        <button onClick={() => openModal('signup')} className='sub-text linked-text font-semibold'>
          Sign Up
        </button>
      </div>
    </Modal>
  );
};

export default SigninModal;
