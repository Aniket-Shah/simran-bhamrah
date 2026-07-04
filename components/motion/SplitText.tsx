'use client';
import { useRef } from 'react';
import { useInView } from '@/lib/scroll';

interface SplitTextProps {
  text: string;
  className?: string;
  stagger?: number;
}

export const SplitText = ({ text, className, stagger = 80 }: SplitTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref);
  const words = text.split(' ');

  return (
    <span ref={ref} aria-label={text} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden
          style={{
            display: 'inline-block',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity var(--d-base) var(--ease-out) ${i * stagger}ms, transform var(--d-base) var(--ease-out) ${i * stagger}ms`,
          }}
        >
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  );
};
