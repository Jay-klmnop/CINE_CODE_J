import { useAuthStore } from '@/stores';
import { SigninModal, SignupModal } from '@/features/auth/ui';

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
