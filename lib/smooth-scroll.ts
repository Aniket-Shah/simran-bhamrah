import Lenis from 'lenis';

export function initSmoothScroll(): () => void {
  const lenis = new Lenis();
  let rafId: number;

  const raf = (time: number) => {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  };
  rafId = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(rafId);
    lenis.destroy();
  };
}
