'use client';
import { useRef } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { useInView } from '@/lib/scroll';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

export const FadeIn = ({ children, delay = 0, className, style }: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  const { animationDelay, ...restStyle } = (style ?? {}) as CSSProperties & { animationDelay?: string };
  const resolvedDelay = delay || (animationDelay ? parseInt(animationDelay) : 0);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transition: `opacity var(--d-base) var(--ease-out) ${resolvedDelay}ms`,
        ...restStyle,
      }}
    >
      {children}
    </div>
  );
};
