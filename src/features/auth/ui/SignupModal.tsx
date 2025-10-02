import { useState } from 'react';
import { supabase } from '@/api';
import { useAuthStore } from '@/features/auth/store';
import { Modal } from '@/shared/ui';

const SignupModal = () => {
  const { modalType, closeModal } = useAuthStore();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
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
          <input
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='input account-input'
            required
          />
          {confirmPassword.length > 0 && password === confirmPassword ? (
            <p className='mt-2 text-sm text-green-500'>Passwords match</p>
          ) : (
            <p className='mt-2 text-sm text-red-500'>Passwords do not match</p>
          )}
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
