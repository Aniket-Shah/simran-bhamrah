'use client';
import { useEffect } from 'react';
import { initSmoothScroll } from '@/lib/smooth-scroll';
import { CursorTrailDot } from '@/components/motion/CursorTrailDot';
import { PageTransition } from '@/components/motion/PageTransition';

export const RootClientShell = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const cleanup = initSmoothScroll();
    return cleanup;
  }, []);

  return (
    <>
      <CursorTrailDot />
      <PageTransition>{children}</PageTransition>
    </>
  );
};
