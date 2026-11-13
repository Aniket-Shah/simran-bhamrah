'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

interface NavLink {
  href: string;
  label: string;
}

interface NavStickyMinimalProps {
  logo: React.ReactNode;
  links: NavLink[];
  cta?: React.ReactNode;
}

export const NavStickyMinimal = ({ logo, links, cta }: NavStickyMinimalProps) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;
      if (scrollY < 120) { setActive('Home'); return; }
      // The last section is too short to reach the top, so mark it when the page hits the bottom.
      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 2) {
        setActive('Contact');
        return;
      }
      const sectionOrder = ['contact', 'experience', 'projects', 'skills', 'about'];
      for (const id of sectionOrder) {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop - 120) {
          setActive(id.charAt(0).toUpperCase() + id.slice(1));
          return;
        }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      {/* Nav bar — z raised above backdrop when menu is open so the X is clickable */}
      <nav
        className="fixed inset-x-0 top-0 border-b border-[var(--color-border)] backdrop-blur-sm"
        style={{ zIndex: open ? 210 : 100, background: 'var(--color-surface)' }}
        aria-label="Main navigation"
      >
        <div className="mx-auto flex items-center justify-between py-[18px] px-[var(--gutter)]" style={{ maxWidth: '1440px' }}>
          {/* Logo */}
          <Link href="/" className="text-xl font-black tracking-tight shrink-0" aria-label="Home">
            {logo}
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex gap-[var(--s-4)] lg:gap-[var(--s-6)]">
            {links.map((link) => {
              const isActive = active === link.label;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="pb-1 transition-colors duration-200"
                    style={{
                      fontSize: 'var(--fs-sm)',
                      fontWeight: isActive ? '600' : '500',
                      color: isActive ? 'var(--color-text)' : 'var(--color-muted)',
                      borderBottom: isActive
                        ? '2px solid var(--color-primary)'
                        : '2px solid transparent',
                    }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {cta && <div className="hidden md:block shrink-0">{cta}</div>}

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-[var(--color-text)]"
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Backdrop — sibling of nav, NOT inside it, so fixed positioning works correctly */}
      {open && (
        <div
          className="md:hidden fixed inset-0"
          style={{ background: 'rgba(0,0,0,0.75)', zIndex: 190 }}
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Drawer — sibling of nav for the same reason */}
      <div
        className={`md:hidden fixed inset-y-0 left-0 w-4/5 max-w-xs shadow-xl flex flex-col transform transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ background: 'var(--color-surface)', zIndex: 200 }}
        aria-hidden={!open}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-6 py-4 border-b shrink-0"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <span className="text-xl font-black tracking-tight">
            S<span style={{ color: 'var(--color-primary)' }}>B</span>
          </span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-4 py-5" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {links.map((link) => {
              const isActive = active === link.label;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center px-4 py-3 rounded-xl font-semibold transition-colors duration-200"
                    style={{
                      fontSize: 'var(--fs-base)',
                      background: isActive ? 'var(--color-primary-bg)' : 'transparent',
                      color: isActive ? 'var(--color-text)' : 'var(--color-muted)',
                    }}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA pinned to bottom */}
        {cta && (
          <div
            className="px-6 py-5 border-t shrink-0"
            style={{ borderColor: 'var(--color-border)' }}
          >
            {cta}
          </div>
        )}
      </div>
    </>
  );
};
