import Image from 'next/image';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { FadeUp } from '@/components/motion/FadeUp';
import { SplitText } from '@/components/motion/SplitText';
import { MaskReveal } from '@/components/motion/MaskReveal';
import { personal } from '@/app/data/personal';

export const HeroSplit = () => {
  return (
    <section
      aria-label="Hero"
      className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 py-12 lg:py-24"
    >
      {/* Image – mobile top */}
      <div className="w-full lg:w-2/5 flex justify-center">
        <Image
          src="/photo.png"
          alt="Simran Bhamrah"
          width={400}
          height={530}
          priority
          className="rounded-2xl bg-[var(--color-border)]"
        />
      </div>

      {/* Content – mobile below image */}
      <div className="w-full lg:w-3/5 flex flex-col gap-6">
        {/* Eyebrow */}
        <p
          style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-muted)' }}
          className="font-medium"
        >
          {personal.role}
        </p>

        {/* Name */}
        <h1 className="text-[var(--fs-3xl)] lg:text-[var(--fs-hero)] font-bold">
          <SplitText text={personal.name} />
        </h1>

        {/* Title */}
        <MaskReveal>
          <p
            style={{ fontSize: 'var(--fs-base)', color: 'var(--color-primary)' }}
          >
            I build automation systems that eliminate manual work — at enterprise scale.
          </p>
        </MaskReveal>

        {/* Bio with motion */}
        <FadeUp>
          <p style={{ fontSize: 'var(--fs-base)' }}>{personal.bio}</p>
        </FadeUp>

        {/* CTA row */}
        <FadeUp>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center">
            <Link
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-md flex items-center gap-2 bg-[var(--color-primary)] text-[var(--color-primary-fg)]"
            >
              <Linkedin size={20} color="var(--color-muted)" />
              Connect on LinkedIn
            </Link>
            <Link
              href="/resume.pdf"
              className="px-5 py-3 rounded-md bg-[var(--color-accent)] text-[var(--color-primary-fg)]"
            >
              Download CV
            </Link>
          </div>
        </FadeUp>

        {/* Stats strip */}
        <FadeUp>
          <div className="grid grid-cols-2 gap-4 lg:flex lg:gap-8 lg:items-center">
            {personal.stats.map((stat, idx) => (
              <div key={idx} className="text-center lg:text-left">
                <p style={{ fontSize: 'var(--fs-lg)', fontWeight: '600' }}>{stat.value}</p>
                <p
                  style={{ fontSize: 'var(--fs-sm)', color: 'var(--color-muted)' }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};
