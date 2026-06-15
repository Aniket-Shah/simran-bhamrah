import { FadeUp } from '@/components/motion/FadeUp';
import { experience } from '@/app/data/experience';

export const ExperienceSection = () => {
  return (
    <section
      aria-label="Experience"
      className="py-12 px-4 md:px-8 lg:px-12"
    >
      {/* Section heading */}
      <h2
        style={{ fontSize: 'var(--fs-2xl)', color: 'var(--color-text)' }}
        className="font-bold mb-8"
      >
        Experience
      </h2>

      {/* Timeline container */}
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-4 top-0 bottom-0 w-px"
          style={{ background: 'var(--color-border)' }}
          aria-hidden="true"
        />
        {experience.map((entry, idx) => (
          <FadeUp key={entry.company + idx} style={{ animationDelay: `${idx * 150}ms` }}>
            <div className="flex items-start mb-12">
              {/* Dot and connecting line */}
              <div className="relative flex flex-col items-center mr-4">
                <span
                  className="block w-3 h-3 rounded-full"
                  style={{
                    background: entry.featured ? 'var(--color-accent)' : 'var(--color-primary)'
                  }}
                />
                {/* Line segment below dot – only show if not last entry */}
                {idx < experience.length - 1 && (
                  <span
                    className="flex-1 w-px"
                    style={{ background: 'var(--color-border)' }}
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3
                    className="font-bold"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {entry.company}
                  </h3>
                  {entry.featured && (
                    <span
                      className="px-[6px] py-[2px] rounded-full"
                      style={{
                        background: 'var(--color-accent)',
                        color: 'var(--color-primary-fg)',
                        fontSize: 'var(--fs-xs)'
                      }}
                    >
                      Featured
                    </span>
                  )}
                </div>
                <p style={{ color: 'var(--color-muted)' }}>{entry.role}</p>
                <p
                  style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-muted)' }}
                >
                  {entry.period}
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  {entry.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} style={{ color: 'var(--color-text)' }}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
};
