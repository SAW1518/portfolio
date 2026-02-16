import { ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface OverlayWrapperProps {
  children: ReactNode;
}

export const OverlayWrapper = ({ children }: OverlayWrapperProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const pageWrapper = document.getElementById('pageWrapper') as Element;

  return createPortal(children, pageWrapper);
};
