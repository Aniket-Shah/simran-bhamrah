import { MapPin, Mail, Linkedin, ArrowRight, Briefcase, Zap, Sparkles, User, GraduationCap, Trophy, Download } from 'lucide-react';
import { FadeUp } from '@/components/motion/FadeUp';
import { FadeIn } from '@/components/motion/FadeIn';
import { personal } from '@/app/data/personal';

const aboutRows = [
  { icon: MapPin, label: 'From', value: (p: typeof personal) => p.location },
  { icon: Mail, label: 'Email', value: (p: typeof personal) => p.email },
  { icon: Linkedin, label: 'LinkedIn', value: (p: typeof personal) => p.linkedinHandle },
  { icon: Briefcase, label: 'Status', value: (p: typeof personal) => p.availability },
];

export const HeroSplit = () => {
  return (
    <section
      aria-label="Hero"
      className="flex flex-col xl:flex-row gap-6 xl:gap-8 py-10 xl:py-14 items-start"
    >
      {/* ── Left: Text Content ── */}
      <div className="flex-1 min-w-0 w-full flex flex-col gap-5 xl:gap-6">
        <FadeUp delay={0}>
          <p
            className="font-semibold"
            style={{ fontSize: 'var(--fs-base)', color: 'var(--color-primary)' }}
          >
            Hello, I&apos;m
          </p>
        </FadeUp>

        <FadeUp delay={80}>
          <h1
            className="font-black leading-[1.05] tracking-tight"
            style={{ fontSize: 'var(--fs-3xl)', color: 'var(--color-text)' }}
          >
            {personal.name}
          </h1>
        </FadeUp>

        <FadeUp delay={140}>
          <p
            className="font-semibold"
            style={{ fontSize: 'var(--fs-base)', color: 'var(--color-muted)' }}
          >
            {personal.roleShort}
          </p>
        </FadeUp>

        <FadeUp delay={200}>
          <p
            className="leading-relaxed"
            style={{
              fontSize: 'var(--fs-sm)',
              color: 'var(--color-muted)',
              maxWidth: '420px',
            }}
          >
            {personal.bioShort}
          </p>
        </FadeUp>

        <FadeUp delay={280}>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
              style={{
                background: 'var(--color-primary)',
                color: 'var(--color-primary-fg)',
                fontSize: 'var(--fs-sm)',
              }}
            >
              View My Work
              <ArrowRight size={15} aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold border-2 hover:border-[var(--color-primary)] transition-colors duration-200"
              style={{
                borderColor: 'var(--color-border)',
                color: 'var(--color-text)',
                fontSize: 'var(--fs-sm)',
              }}
            >
              Contact Me
              <ArrowRight size={15} aria-hidden="true" />
            </a>
            <a
              href="/Simran_Bhamrah_Resume.pdf"
              download="Simran_Bhamrah_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold border-2 hover:border-[var(--color-primary)] transition-colors duration-200"
              style={{
                borderColor: 'var(--color-border)',
                color: 'var(--color-text)',
                fontSize: 'var(--fs-sm)',
              }}
            >
              Download CV
              <Download size={15} aria-hidden="true" />
            </a>
          </div>
        </FadeUp>
      </div>

      {/* ── Center: Avatar Card ── */}
      <div
        className="relative shrink-0 self-center xl:self-auto"
        style={{ width: '240px', height: '320px' }}
        aria-hidden="true"
      >
        {/* Yellow background box at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 rounded-2xl"
          style={{
            background: 'var(--color-primary)',
            height: '220px',
          }}
        >
          <div
            className="absolute inset-0 rounded-2xl"
            style={{
              background: 'radial-gradient(circle, rgba(0,0,0,0.18) 1.5px, transparent 1.5px)',
              backgroundSize: '12px 12px',
            }}
          />
          <span
            className="absolute top-3 right-4 select-none"
            style={{ color: 'rgba(0,0,0,0.25)' }}
          >
            <Zap size={22} aria-hidden="true" />
          </span>
          <span
            className="absolute top-10 left-3 select-none"
            style={{ color: 'rgba(0,0,0,0.18)' }}
          >
            <Sparkles size={16} aria-hidden="true" />
          </span>
        </div>
        {/* Profile photo — pops out above the yellow box */}
        <img
          src="/SB-Image-transparent.png"
          alt="Simran Bhamrah"
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            height: '300px',
            width: 'auto',
            objectFit: 'contain',
            objectPosition: 'bottom',
          }}
        />
      </div>

      {/* ── Right: About Me Card ── */}
      <FadeIn delay={360} className="w-full xl:w-auto shrink-0">
        <div
          className="rounded-2xl border flex flex-col gap-4 w-full xl:w-[300px]"
          style={{
            background: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
            padding: '20px',
          }}
        >
          {/* Card header */}
          <div className="flex items-center gap-2">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              style={{ background: 'var(--color-primary-bg)' }}
              aria-hidden="true"
            >
              <User size={16} style={{ color: 'var(--color-primary)' }} />
            </span>
            <h2
              className="font-bold"
              style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-text)' }}
            >
              About Me
            </h2>
          </div>

          {/* Bio blurb */}
          <p
            style={{
              fontSize: 'var(--fs-xs)',
              color: 'var(--color-muted)',
              lineHeight: 1.65,
            }}
          >
            Highly skilled backend developer with 5+ years of experience specialising
            in Java automation, compliance systems, and enterprise web platforms.
          </p>

          {/* Info rows */}
          <div
            className="flex flex-col gap-3 pt-1 border-t"
            style={{ borderColor: 'var(--color-border)' }}
          >
            {aboutRows.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-2">
                <Icon
                  size={13}
                  aria-hidden="true"
                  style={{
                    color: 'var(--color-muted)',
                    marginTop: '3px',
                    flexShrink: 0,
                  }}
                />
                <div className="min-w-0">
                  <span
                    className="font-semibold block"
                    style={{ fontSize: '0.6rem', color: 'var(--color-muted)', lineHeight: 1.4 }}
                  >
                    {label}:
                  </span>
                  <span
                    className="block"
                    style={{
                      fontSize: 'var(--fs-xs)',
                      color: 'var(--color-text)',
                      wordBreak: 'break-word',
                      lineHeight: 1.4,
                    }}
                  >
                    {value(personal)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Education & Achievements */}
          <div
            className="flex flex-col gap-3 pt-3 border-t"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <div className="flex items-start gap-2">
              <GraduationCap
                size={13}
                aria-hidden="true"
                style={{
                  color: 'var(--color-muted)',
                  marginTop: '3px',
                  flexShrink: 0,
                }}
              />
              <div className="min-w-0">
                <span
                  className="font-semibold block"
                  style={{ fontSize: '0.6rem', color: 'var(--color-muted)', lineHeight: 1.4 }}
                >
                  Education:
                </span>
                <span
                  className="block font-medium"
                  style={{
                    fontSize: 'var(--fs-xs)',
                    color: 'var(--color-text)',
                    wordBreak: 'break-word',
                    lineHeight: 1.4,
                  }}
                >
                  B.Tech Computer Science
                </span>
                <span
                  className="block"
                  style={{
                    fontSize: '0.65rem',
                    color: 'var(--color-muted)',
                    lineHeight: 1.3,
                  }}
                >
                  K.C. College of Engineering
                </span>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <Trophy
                size={13}
                aria-hidden="true"
                style={{
                  color: 'var(--color-muted)',
                  marginTop: '3px',
                  flexShrink: 0,
                }}
              />
              <div className="min-w-0">
                <span
                  className="font-semibold block"
                  style={{ fontSize: '0.6rem', color: 'var(--color-muted)', lineHeight: 1.4 }}
                >
                  Awards:
                </span>
                <span
                  className="block font-medium"
                  style={{
                    fontSize: 'var(--fs-xs)',
                    color: 'var(--color-text)',
                    wordBreak: 'break-word',
                    lineHeight: 1.4,
                  }}
                >
                  TCS Best Team & TCS Star of the Month
                </span>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};
