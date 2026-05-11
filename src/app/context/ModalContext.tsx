'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import CalendlyModal from '../components/CalendlyModal';

interface ModalContextType {
  openBooking: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openBooking = () => setIsOpen(true);
  const closeBooking = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ openBooking }}>
      {children}
      <CalendlyModal isOpen={isOpen} onClose={closeBooking} />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error('useModal must be used within a ModalProvider');
  return context;
};
