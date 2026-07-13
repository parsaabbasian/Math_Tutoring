'use client';
import { useEffect, useRef, useState } from 'react';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefill?: {
    name?: string;
    email?: string;
    phone?: string;
    tutoringMode?: string;
    tutoringType?: 'online' | 'in-person';
    country?: string;
    grade?: string;
    address?: string;
  };
}

const CalendlyModal = ({ isOpen, onClose, prefill }: CalendlyModalProps) => {
  const calendlyRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const pollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const initWidget = () => {
    if (!calendlyRef.current) return;
    calendlyRef.current.innerHTML = '';
    setLoaded(false);

    const customAnswers: Record<string, string> = {
      a1: prefill?.phone || '',
      a2: prefill?.tutoringMode || '',
      a3: prefill?.country || '',
      a4: prefill?.grade || '',
    };

    if (prefill?.tutoringType === 'in-person' && prefill?.address) {
      customAnswers.a5 = prefill.address;
    }

    (window as any).Calendly.initInlineWidget({
      url: 'https://calendly.com/parsa-abbasian-06/new-meeting',
      parentElement: calendlyRef.current,
      prefill: {
        name: prefill?.name || '',
        email: prefill?.email || '',
        customAnswers,
      },
      utm: {},
    });

    // Calendly fires this event when the widget finishes rendering
    const handler = (e: MessageEvent) => {
      if (e.data?.event === 'calendly.event_type_viewed' ||
          e.data?.event === 'calendly.profile_page_viewed') {
        setLoaded(true);
        window.removeEventListener('message', handler);
      }
    };
    window.addEventListener('message', handler);

    // Fallback: show after 3s regardless
    setTimeout(() => setLoaded(true), 3000);
  };

  useEffect(() => {
    if (!isOpen) {
      setLoaded(false);
      if (pollRef.current) clearInterval(pollRef.current);
      return;
    }

    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);

    if ((window as any).Calendly) {
      initWidget();
    } else {
      // Poll until the script tag has loaded
      pollRef.current = setInterval(() => {
        if ((window as any).Calendly) {
          clearInterval(pollRef.current!);
          initWidget();
        }
      }, 100);
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      if (pollRef.current) clearInterval(pollRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, prefill]);

  return (
    <div className={`modal-overlay ${isOpen ? 'modal-active' : ''}`} onClick={onClose}>
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-label="Book a consultation"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Loading skeleton — visible until Calendly fires its ready event */}
        {!loaded && (
          <div className="calendly-skeleton">
            <div className="calendly-skeleton-logo" />
            <div className="calendly-skeleton-line" style={{ width: '55%' }} />
            <div className="calendly-skeleton-line" style={{ width: '35%' }} />
            <div className="calendly-skeleton-divider" />
            <div className="calendly-skeleton-slots">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="calendly-skeleton-slot" />
              ))}
            </div>
          </div>
        )}

        <div
          ref={calendlyRef}
          style={{
            width: '100%',
            height: '100%',
            opacity: loaded ? 1 : 0,
            transition: 'opacity 0.4s ease',
          }}
        />
      </div>
    </div>
  );
};

export default CalendlyModal;
