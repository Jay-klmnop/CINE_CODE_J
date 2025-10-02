import { useAuthStore } from '@/features/auth';
import { SigninModal, SignupModal } from '@/features/auth';

const GlobalModalManager = () => {
  const { modalType } = useAuthStore();

  return (
    <>
      {modalType === 'signin' && <SigninModal />}
      {modalType === 'signup' && <SignupModal />}
    </>
  );
};

export default GlobalModalManager;
