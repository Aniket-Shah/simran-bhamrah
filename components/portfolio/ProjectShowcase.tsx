'use client';
import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import type { ProjectEntry } from '@/app/data/projects';

export const ProjectShowcase = ({ projects }: { projects: ProjectEntry[] }) => {
  const categories = Array.from(new Set(projects.map((p) => p.category)));
  const [selected, setSelected] = useState('');
  const filtered = selected ? projects.filter((p) => p.category === selected) : projects;

  const btnBase =
    'px-[var(--s-3)] py-[var(--s-1)] rounded-[var(--radius-full)] font-semibold border transition-colors duration-[var(--d-fast)] cursor-pointer';
  const btnActive = 'border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-primary-fg)]';
  const btnIdle =
    'border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:border-[var(--color-primary)]';

  return (
    <section aria-label="Featured Projects" className="py-[var(--s-8)]">
      {/* Filter bar */}
      <div
        className="flex flex-wrap gap-[var(--s-2)] mb-[var(--s-6)]"
        role="group"
        aria-label="Filter projects by category"
      >
        <button
          onClick={() => setSelected('')}
          aria-pressed={selected === ''}
          aria-label="Show all projects"
          className={`${btnBase} ${selected === '' ? btnActive : btnIdle}`}
          style={{ fontSize: 'var(--fs-sm)' }}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            aria-pressed={selected === cat}
            aria-label={`Filter by ${cat}`}
            className={`${btnBase} ${selected === cat ? btnActive : btnIdle}`}
            style={{ fontSize: 'var(--fs-sm)' }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--s-4)]">
        {filtered.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};
