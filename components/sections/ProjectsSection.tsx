import { FolderOpen } from 'lucide-react';
import { FadeUp } from '@/components/motion/FadeUp';
import { ProjectShowcase } from '@/components/portfolio/ProjectShowcase';
import { projects } from '@/app/data/projects';

export const ProjectsSection = () => {
  return (
    <section
      aria-label="Featured Projects"
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
            <FolderOpen size={15} style={{ color: 'var(--color-primary-dark)' }} />
          </span>
          <h2
            className="font-bold"
            style={{ fontSize: 'var(--fs-xl)', color: 'var(--color-text)' }}
          >
            Featured Projects
          </h2>
        </div>
      </FadeUp>
      <ProjectShowcase projects={projects} />
    </section>
  );
};
