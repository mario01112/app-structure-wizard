
import React from 'react';
import PurchaseModal from './PurchaseModal';
import { usePurchaseInterceptor } from '@/hooks/usePurchaseInterceptor';

interface PurchaseInterceptorProviderProps {
  children: React.ReactNode;
}

const PurchaseInterceptorProvider: React.FC<PurchaseInterceptorProviderProps> = ({ children }) => {
  const { isModalOpen, closeModal } = usePurchaseInterceptor();

  return (
    <>
      {children}
      <PurchaseModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default PurchaseInterceptorProvider;
