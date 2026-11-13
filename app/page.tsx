import { Sidebar } from '@/components/sections/Sidebar';
import { NavStickyMinimal } from '@/components/sections/NavStickyMinimal';
import { HeroSplit } from '@/components/sections/HeroSplit';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';

const navLinks = [
  { href: '#', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

// The top nav is fixed and 65px tall. Without this offset a menu link scrolls a
// section's top edge to y=0 and the nav covers its heading.
const anchor = 'scroll-mt-[65px]';

export default function Home() {
  return (
    <>
      <NavStickyMinimal
        logo={
          <>
            S<span style={{ color: 'var(--color-primary)' }}>B</span>
          </>
        }
        links={navLinks}
        cta={
          <a
            href="/Simran_Bhamrah_Resume.pdf"
            download
            aria-label="Download Simran Bhamrah's resume"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-opacity"
            style={{
              fontSize: 'var(--fs-sm)',
              background: 'var(--color-primary)',
              color: 'var(--color-primary-fg)',
            }}
          >
            ↓ Download CV
          </a>
        }
      />

      <Sidebar />

      {/* Main content offset: CSS var --sidebar-offset = 0 mobile / 220px desktop */}
      <div style={{ paddingTop: '65px', marginLeft: 'var(--sidebar-offset)' }}>
        <main className="px-[var(--gutter)] py-0" style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div id="about" className={anchor}>
            <HeroSplit />
          </div>
          <div id="skills" className={anchor}>
            <SkillsSection />
          </div>
          <div id="projects" className={anchor}>
            <ProjectsSection />
          </div>
          <div id="experience" className={anchor}>
            <ExperienceSection />
          </div>
          <div id="contact" className={anchor}>
            <ContactSection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
