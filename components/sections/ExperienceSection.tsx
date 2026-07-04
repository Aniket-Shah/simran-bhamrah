import { Briefcase } from 'lucide-react';
import { FadeUp } from '@/components/motion/FadeUp';
import { experience } from '@/app/data/experience';

export const ExperienceSection = () => {
  return (
    <section
      aria-label="Professional Experience"
      className="py-10 border-t"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <FadeUp>
        <div className="flex items-center gap-2 mb-8">
          <span
            className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: 'var(--color-primary-bg)' }}
            aria-hidden="true"
          >
            <Briefcase size={15} style={{ color: 'var(--color-primary-dark)' }} />
          </span>
          <h2
            className="font-bold"
            style={{ fontSize: 'var(--fs-xl)', color: 'var(--color-text)' }}
          >
            Experience
          </h2>
        </div>
      </FadeUp>

      <div className="flex flex-col gap-5">
        {experience.map((entry, idx) => (
          <FadeUp key={entry.company} delay={idx * 120}>
            <article
              className="rounded-2xl border p-6"
              style={{
                background: 'var(--color-surface)',
                borderColor: entry.featured
                  ? 'var(--color-primary)'
                  : 'var(--color-border)',
                borderWidth: entry.featured ? '1.5px' : '1px',
              }}
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-0.5">
                    <h3
                      className="font-extrabold"
                      style={{ fontSize: 'var(--fs-base)', color: 'var(--color-text)' }}
                    >
                      {entry.company}
                    </h3>
                    {entry.featured && (
                      <span
                        className="px-2 py-0.5 rounded-full font-bold"
                        style={{
                          fontSize: '0.6rem',
                          background: 'var(--color-primary)',
                          color: 'var(--color-primary-fg)',
                        }}
                      >
                        Current
                      </span>
                    )}
                  </div>
                  <p
                    className="font-semibold"
                    style={{
                      fontSize: 'var(--fs-sm)',
                      color: 'var(--color-primary-dark)',
                    }}
                  >
                    {entry.role}
                  </p>
                </div>
                <span
                  className="shrink-0 px-3 py-1 rounded-full border font-medium"
                  style={{
                    fontSize: 'var(--fs-xs)',
                    color: 'var(--color-muted)',
                    borderColor: 'var(--color-border)',
                    background: 'var(--color-bg)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {entry.period}
                </span>
              </div>

              {/* Bullet points */}
              <ul className="flex flex-col gap-2">
                {entry.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    className="flex gap-2 items-start leading-relaxed"
                    style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-muted)' }}
                  >
                    <span
                      className="shrink-0 font-black mt-0.5"
                      style={{ color: 'var(--color-primary)' }}
                      aria-hidden="true"
                    >
                      ·
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          </FadeUp>
        ))}
      </div>
    </section>
  );
};
