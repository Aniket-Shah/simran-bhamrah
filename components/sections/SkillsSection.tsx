'use client';

import { useRef } from 'react';
import { Clock, Zap, TrendingUp, ShieldCheck, Settings } from 'lucide-react';
import { useInView } from '@/lib/scroll';
import { FadeUp } from '@/components/motion/FadeUp';
import { FadeIn } from '@/components/motion/FadeIn';
import { barSkills } from '@/app/data/skills';
import { personal } from '@/app/data/personal';

const STAT_ICONS = [Clock, Zap, TrendingUp, ShieldCheck];

const SkillBar = ({
  name,
  percent,
  delay,
}: {
  name: string;
  percent: number;
  delay: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <div ref={ref}>
      <div className="flex justify-between items-center mb-2">
        <span style={{ fontSize: 'var(--fs-sm)', fontWeight: 500, color: 'var(--color-text)' }}>
          {name}
        </span>
        <span
          style={{
            fontSize: 'var(--fs-xs)',
            fontWeight: 700,
            color: 'var(--color-primary-dark)',
          }}
        >
          {percent}%
        </span>
      </div>
      <div
        className="h-2 rounded-full overflow-hidden"
        style={{ background: 'var(--color-border)' }}
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency ${percent}%`}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: inView ? `${percent}%` : '0%',
            background: 'var(--color-primary)',
            transition: `width 1s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          }}
        />
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  return (
    <section
      aria-label="Technical Skills"
      className="py-10 border-t"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* ── Left: Skill Progress Bars ── */}
        <div className="flex-1 min-w-0 w-full">
          <FadeUp>
            <div className="flex items-center gap-2 mb-7">
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: 'var(--color-primary-bg)' }}
                aria-hidden="true"
              >
                <Settings size={15} style={{ color: 'var(--color-primary-dark)' }} />
              </span>
              <h2
                className="font-bold"
                style={{ fontSize: 'var(--fs-xl)', color: 'var(--color-text)' }}
              >
                My Skills
              </h2>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {barSkills.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percent={skill.percent}
                delay={i * 120}
              />
            ))}
          </div>
        </div>

        {/* ── Right: Stats Card ── */}
        <FadeIn delay={200} className="w-full lg:w-auto shrink-0">
          <div
            className="rounded-2xl border p-6 lg:p-7 w-full lg:w-[280px]"
            style={{
              background: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <div className="grid grid-cols-2 gap-6">
              {personal.stats.map((stat, i) => {
                const Icon = STAT_ICONS[i % STAT_ICONS.length];
                return (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center text-center gap-2"
                  >
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center"
                      style={{ background: 'var(--color-primary-bg)' }}
                      aria-hidden="true"
                    >
                      <Icon
                        size={19}
                        style={{ color: 'var(--color-primary-dark)' }}
                      />
                    </div>
                    <p
                      className="font-black leading-none"
                      style={{ fontSize: 'var(--fs-xl)', color: 'var(--color-text)' }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="leading-snug"
                      style={{ fontSize: 'var(--fs-xs)', color: 'var(--color-muted)' }}
                    >
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
