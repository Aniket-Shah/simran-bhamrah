'use client';
import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';

export const PageTransition = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      style={{
        opacity: mounted ? 1 : 0,
        transition: 'opacity var(--d-base) var(--ease-out)',
      }}
    >
      {children}
    </div>
  );
};
