import type { ProjectEntry } from '@/app/data/projects';

const GRADIENTS = [
  'linear-gradient(135deg, #0d2137 0%, #1a4070 60%, #0a1e30 100%)',
  'linear-gradient(135deg, #0d2a1e 0%, #1a5e38 60%, #0a2018 100%)',
  'linear-gradient(135deg, #2a1a0d 0%, #7a4a15 60%, #3a200a 100%)',
];

export const ProjectCard = ({ project, index = 0 }: { project: ProjectEntry; index?: number }) => {
  const gradient = GRADIENTS[index % GRADIENTS.length];

  return (
    <article
      className="rounded-[var(--radius-md)] overflow-hidden border flex flex-col"
      style={{
        background: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
        transition: `transform var(--d-base) var(--ease-out), box-shadow var(--d-base) var(--ease-out)`,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
      }}
    >
      {/* Gradient thumbnail */}
      <div style={{ background: gradient }} className="p-[var(--s-4)]">
        <span
          className="inline-block px-3 py-1 font-bold rounded-[var(--radius-full)] mb-[var(--s-3)]"
          style={{
            fontSize: 'var(--fs-xs)',
            background: 'rgba(0,0,0,0.4)',
            color: 'var(--color-primary)',
          }}
        >
          {project.category}
        </span>
        <div className="flex gap-[var(--s-4)]">
          {project.impact.map(({ metric, label }) => (
            <div key={label} className="text-center">
              <div
                className="font-black leading-none"
                style={{ fontSize: 'var(--fs-base)', color: 'var(--color-primary)' }}
              >
                {metric}
              </div>
              <div className="font-medium mt-1" style={{ fontSize: '0.625rem', color: 'rgba(255,255,255,0.6)' }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="p-[var(--s-4)] flex flex-col flex-1 gap-[var(--s-2)]">
        <div>
          <h3 className="font-extrabold mb-1" style={{ fontSize: 'var(--fs-base)', color: 'var(--color-text)' }}>
            {project.title}
          </h3>
          <span style={{ fontSize: 'var(--fs-xs)', color: 'var(--color-muted)' }}>{project.year}</span>
        </div>
        <p className="leading-relaxed flex-1" style={{ fontSize: 'var(--fs-xs)', color: 'var(--color-muted)' }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 pt-[var(--s-2)] border-t" style={{ borderColor: 'var(--color-border)' }}>
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-[var(--radius-full)] font-bold"
              style={{
                fontSize: '0.625rem',
                background: 'var(--color-primary-bg)',
                color: 'var(--color-primary-dark)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};
