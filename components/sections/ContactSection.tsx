import Link from 'next/link';
import { FadeIn } from '@/components/motion/FadeIn';
import { personal } from '@/app/data/personal';

export const ContactSection = () => {
  return (
    <section
      aria-label="Contact"
      className="py-12 flex justify-center"
    >
      <div className="w-full max-w-[580px] text-center">
        {/* Heading */}
        <FadeIn>
          <h2
            className="font-bold mb-6 text-[var(--fs-2xl)] lg:text-[var(--fs-3xl)]"
            style={{ color: 'var(--color-text)' }}
          >
            Let's build something that matters.
          </h2>
        </FadeIn>

        {/* Subtext */}
        <p
          className="mb-8"
          style={{
            color: 'var(--color-muted)',
            fontSize: 'var(--fs-base)'
          }}
        >
          Open to backend engineering, automation architecture, and tech lead roles across India and remote-first teams globally.
        </p>

        {/* CTA row */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <Link
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-md flex items-center justify-center"
              style={{
                background: 'var(--color-primary)',
                color: 'var(--color-primary-fg)'
              }}
            >
              Connect on LinkedIn
            </Link>
            <Link
              href={`mailto:${personal.email}`}
              className="px-5 py-3 rounded-md flex items-center justify-center"
              style={{
                background: 'transparent',
                border: '2px solid var(--color-primary)',
                color: 'var(--color-primary)'
              }}
            >
              Send an Email
            </Link>
          </div>
        </FadeIn>


      </div>
    </section>
  );
};
