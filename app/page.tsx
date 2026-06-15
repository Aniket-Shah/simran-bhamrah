import { FadeUp } from '@/components/motion/FadeUp';
import { NavStickyMinimal } from '@/components/sections/NavStickyMinimal';
import { HeroSplit } from '@/components/sections/HeroSplit';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <>
      <FadeUp>
        <NavStickyMinimal />
      </FadeUp>
      <FadeUp>
        <HeroSplit />
      </FadeUp>
      <FadeUp>
        <SkillsSection />
      </FadeUp>
      <FadeUp>
        <ExperienceSection />
      </FadeUp>
      <FadeUp>
        <ContactSection />
      </FadeUp>
      <FadeUp>
        <Footer />
      </FadeUp>
    </>
  );
}
