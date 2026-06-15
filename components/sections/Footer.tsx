import { Linkedin } from 'lucide-react';
import { personal } from '@/app/data/personal';

export const Footer = () => {
  return (
    <footer
      aria-label="Footer"
      style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        padding: '20px 24px',
      }}
      className="flex justify-between items-center"
    >
      <span
        style={{
          fontSize: 'var(--fs-xs)',
          color: 'var(--color-muted)',
        }}
      >
        © 2025 Simran Bhamrah
      </span>
      <a
        href={personal.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        style={{ color: 'var(--color-muted)' }}
      >
        <Linkedin size={16} color="var(--color-muted)" />
      </a>
    </footer>
  );
};
