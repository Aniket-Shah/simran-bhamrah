'use client';

import { useState, useEffect } from 'react';
import { Home, User, Code2, FolderOpen, Briefcase, Mail, Linkedin } from 'lucide-react';
import { personal } from '@/app/data/personal';

const NAV_ITEMS = [
  { href: '#', label: 'Home', icon: Home, section: 'home' },
  { href: '#about', label: 'About', icon: User, section: 'about' },
  { href: '#skills', label: 'Skills', icon: Code2, section: 'skills' },
  { href: '#projects', label: 'Projects', icon: FolderOpen, section: 'projects' },
  { href: '#experience', label: 'Experience', icon: Briefcase, section: 'experience' },
  { href: '#contact', label: 'Contact', icon: Mail, section: 'contact' },
];

export const Sidebar = () => {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;
      if (scrollY < 120) { setActive('home'); return; }
      const sections = ['contact', 'experience', 'projects', 'skills', 'about'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollY >= el.offsetTop - 120) { setActive(id); return; }
      }
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <aside
      className="hidden lg:flex fixed left-0 bottom-0 w-[220px] flex-col items-center pt-6 pb-5 border-r"
      style={{
        top: '65px',
        background: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
        zIndex: 50,
        overflowY: 'auto',
      }}
      aria-label="Site navigation sidebar"
    >
      {/* Avatar */}
      <img
        src="/SB-Image-transparent.png"
        alt="Simran Bhamrah"
        className="w-20 h-20 rounded-full object-cover mb-3 shrink-0"
        style={{ border: '2px solid var(--color-primary)' }}
        aria-hidden="true"
      />

      {/* Name */}
      <h2
        className="font-black text-center leading-snug mb-1.5 px-2"
        style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-text)' }}
      >
        {personal.name}
      </h2>

      {/* Role badge */}
      <span
        className="font-semibold px-3 py-0.5 rounded-full mb-6 shrink-0"
        style={{
          fontSize: 'var(--fs-xs)',
          background: 'var(--color-primary)',
          color: 'var(--color-primary-fg)',
        }}
      >
        Backend Engineer
      </span>

      {/* Navigation */}
      <nav className="w-full px-3 flex-1 flex flex-col gap-0.5" aria-label="Sidebar navigation">
        {NAV_ITEMS.map(({ href, label, icon: Icon, section }) => {
          const isActive = active === section;
          return (
            <a
              key={label}
              href={href}
              onClick={() => setActive(section)}
              className="flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200"
              style={{
                background: isActive ? 'var(--color-primary-bg)' : 'transparent',
                color: isActive ? 'var(--color-text)' : 'var(--color-muted)',
                fontWeight: isActive ? '600' : '500',
                fontSize: 'var(--fs-sm)',
              }}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon
                size={17}
                aria-hidden="true"
                style={{ color: isActive ? 'var(--color-primary-dark)' : 'var(--color-muted)', flexShrink: 0 }}
              />
              {label}
            </a>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="mt-4 flex flex-col items-center gap-2.5 px-4 shrink-0">
        <p
          className="text-center leading-snug"
          style={{ fontSize: '0.6rem', color: 'var(--color-muted)' }}
        >
          © 2025 Simran Bhamrah.
          <br />
          All rights reserved.
        </p>
        <div className="flex gap-3">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hover:opacity-70 transition-opacity"
          >
            <Linkedin size={15} style={{ color: 'var(--color-muted)' }} aria-hidden="true" />
          </a>
        </div>
      </div>
    </aside>
  );
};
