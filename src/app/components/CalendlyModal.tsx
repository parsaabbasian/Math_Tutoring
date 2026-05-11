'use client';
import { useEffect, useRef } from 'react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendlyModal = ({ isOpen, onClose }: CalendlyModalProps) => {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
      };
      window.addEventListener('keydown', handleEsc);
      
      // Initialize Calendly inline widget inside the modal
      if (typeof window !== 'undefined' && (window as any).Calendly) {
        // Clear any existing content
        if (calendlyRef.current) calendlyRef.current.innerHTML = '';
        
        (window as any).Calendly.initInlineWidget({
          url: 'https://calendly.com/parsa-abbasian-06/30min',
          parentElement: calendlyRef.current,
          prefill: {},
          utm: {}
        });
      }

      return () => window.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen, onClose]);

  return (
    <div className={`modal-overlay ${isOpen ? 'modal-active' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <div ref={calendlyRef} style={{ width: '100%', height: '100%' }}></div>
      </div>
    </div>
  );
};

export default CalendlyModal;
