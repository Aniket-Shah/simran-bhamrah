'use client';
import { useRef, useEffect, useState } from 'react';
import { useInView } from '@/lib/scroll';

interface Props {
  target: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function NumberCounter({ target, duration = 1200, suffix = '', className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref);
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(target);
      return;
    }
    started.current = true;
    const start = performance.now();
    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={className} aria-label={`${target}${suffix}`}>
      {count}{suffix}
    </span>
  );
}
