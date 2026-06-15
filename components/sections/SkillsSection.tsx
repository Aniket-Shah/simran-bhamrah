import { FadeIn } from '@/components/motion/FadeIn';
import { skills } from '@/app/data/skills';

export const SkillsSection = () => {
  return (
    <section
      aria-label="Technical Skills"
      className="py-12"
    >
      {/* Section heading */}
      <h2
        style={{ fontSize: 'var(--fs-2xl)', color: 'var(--color-text)' }}
        className="font-bold mb-6"
      >
        Technical Skills
      </h2>

      {/* Skills pills */}
      <div className="flex flex-wrap gap-4">
        {skills.map((category, catIdx) => (
          <FadeIn
            key={category.label}
            style={{ animationDelay: `${catIdx * 100}ms` }}
          >
            <div className="flex flex-wrap gap-2">
              {category.pills.map((pill, pillIdx) => (
                <span
                  key={pillIdx}
                  style={{
                    background: 'var(--color-surface)',
                    color: 'var(--color-primary)',
                    border: '1px solid var(--color-border)'
                  }}
                  className="px-[14px] py-[6px] rounded-full"
                >
                  {pill}
                </span>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
