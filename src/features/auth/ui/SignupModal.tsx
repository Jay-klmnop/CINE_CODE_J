import { useState } from 'react';
import { supabase } from '@/utils';
import { useAuthStore } from '@/stores';
import { Modal } from '@/shared/ui';

const SignupModal = () => {
  const { modalType, closeModal } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      // In Supabase, a confirmation email is sent by default.
      alert('Sign up complete. Please check your email to activate your account.');
      closeModal();
    }
  };

  return (
    <Modal isOpen={modalType === 'signup'} onClose={closeModal} title='Sign Up'>
      <form onSubmit={handleSignup}>
        <div className='space-y-4'>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='input account-input'
            required
          />
          <input
            type='password'
            placeholder='Password (at least 6 characters)'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='input account-input'
            required
          />
        </div>
        {error && <p className='mt-2 text-sm text-red-500'>{error}</p>}
        <button type='submit' className='button main-button mt-6 w-full p-2'>
          Sign Up
        </button>
      </form>
    </Modal>
  );
};

export default SignupModal;
