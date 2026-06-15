import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

// Navigation links – adjust hrefs as needed for your routing strategy
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const NavStickyMinimal = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const prevScrollY = useRef(0);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > prevScrollY.current && currentY > 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      prevScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Focus trap & escape handling for mobile overlay
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      firstLinkRef.current?.focus();
      window.addEventListener('keydown', handleKey);
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    }
    return () => window.removeEventListener('keydown', handleKey);
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 transition-transform duration-300 ${
        showNav ? 'translate-y-0' : '-translate-y-full'
      } backdrop-blur-sm`}
      style={{ background: 'var(--color-surface)' }}
      aria-label="Main navigation"
    >
      {/* Logo */}
      <div className="font-bold text-xl" style={{ color: 'var(--color-primary)' }}>
        SB
      </div>

      {/* Desktop navigation – hidden on small screens */}
      <ul className="hidden md:flex md:gap-6 lg:gap-8">
        {navLinks.map((link) => (
          <li key={link.href} className="group relative">
            <Link
              href={link.href}
              className="text-base font-medium transition-colors duration-200 hover:text-[var(--color-primary-fg)]"
              style={{ color: 'var(--color-primary)' }}
            >
              {link.label}
            </Link>
            {/* Hover underline draw animation */}
            <span
              className="absolute left-0 -bottom-1 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
              style={{ background: 'var(--color-primary)' }}
            />
          </li>
        ))}
      </ul>

      {/* CTA – visible on tablet and up */}
      <div className="hidden md:block">
        <a
          href="/resume.pdf"
          style={{ background: 'var(--color-accent)', color: 'var(--color-primary-fg)' }}
          className="px-4 py-2 rounded-md font-medium"
        >
          Download CV
        </a>
      </div>

      {/* Mobile hamburger – visible on small screens */}
      <button
        type="button"
        aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden"
        style={{ color: 'var(--color-primary)' }}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 flex flex-col items-center justify-center space-y-6"
          aria-modal="true"
          role="dialog"
          style={{ background: 'var(--color-text)', opacity: 0.8 }}
        >
          {navLinks.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              ref={idx === 0 ? firstLinkRef : undefined}
              className="text-2xl font-medium opacity-0 animate-fade-in"
              style={{ color: 'var(--color-primary-fg)', animationDelay: `${idx * 100}ms` }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {/* Mobile CTA */}
          <a
            href="/resume.pdf"
            style={{ background: 'var(--color-accent)', color: 'var(--color-primary-fg)' }}
            className="mt-4 px-6 py-3 rounded-md font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};
