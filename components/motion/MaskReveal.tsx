'use client';
import { useRef } from 'react';
import type { ReactNode } from 'react';
import { useInView } from '@/lib/scroll';

export const MaskReveal = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      style={{
        clipPath: inView ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
        transition: 'clip-path var(--d-slow) var(--ease-out)',
      }}
    >
      {children}
    </div>
  );
};
