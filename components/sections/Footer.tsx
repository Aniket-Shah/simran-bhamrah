import { Linkedin, Github } from 'lucide-react';
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
      <div className="flex gap-4">
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="hover:opacity-70 transition-opacity"
        >
          <Linkedin size={16} style={{ color: 'var(--color-muted)' }} aria-hidden="true" />
        </a>
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="hover:opacity-70 transition-opacity"
        >
          <Github size={16} style={{ color: 'var(--color-muted)' }} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
};
