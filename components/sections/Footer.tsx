import { Linkedin } from 'lucide-react';
import { personal } from '@/app/data/personal';

export const Footer = () => {
  return (
    <footer
      aria-label="Footer"
      className="flex justify-between items-center px-[var(--gutter)] py-5 mt-10 border-t"
      style={{
        background: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--color-muted)' }}>
        © 2025 Simran Bhamrah. All rights reserved.
      </span>
      <a
        href={personal.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className="hover:opacity-70 transition-opacity"
      >
        <Linkedin size={16} style={{ color: 'var(--color-muted)' }} aria-hidden="true" />
      </a>
    </footer>
  );
};
