'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import HeroSection from '@/component/HeroSection';
import ProjectsSection from '@/component/ProjectsSection';
import ResumeSection from '@/component/ResumeSection';
import ContactSection from '@/component/ContactSection';
import Header from '@/component/Header';
import EarthAnimation from '@/component/EarthAnimation';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [theme, setTheme] = useState<string>('retro');
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const homeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const EARTH_ANIMATION_HEIGHT = '100vh';
  const HEADER_HEIGHT = '5rem';

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'retro';
    setTheme(storedTheme);
    document.documentElement.setAttribute('data-theme', storedTheme);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const progress = Math.min(scrollPosition / (windowHeight * 0.5), 1);
      setScrollProgress(progress);

      if (
        contactRef.current &&
        scrollPosition >= contactRef.current.offsetTop - windowHeight / 2
      ) {
        setActiveSection('contact');
      } else if (
        resumeRef.current &&
        scrollPosition >= resumeRef.current.offsetTop - windowHeight / 2
      ) {
        setActiveSection('resume');
      } else if (
        projectRef.current &&
        scrollPosition >= projectRef.current.offsetTop - windowHeight / 2
      ) {
        setActiveSection('project');
      } else {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Header
        activeSection={activeSection}
        onLinkClick={setActiveSection}
        theme={theme}
        onThemeChange={handleThemeChange}
      />

      <div style={{ paddingTop: HEADER_HEIGHT }}>
        <div style={{ height: EARTH_ANIMATION_HEIGHT, position: 'relative' }}>
          <div
            style={{
              position: 'fixed',
              top: HEADER_HEIGHT,
              left: 0,
              width: '100%',
              height: `calc(100vh - ${HEADER_HEIGHT})`,
              opacity: 1 - scrollProgress,
              pointerEvents: scrollProgress > 0.3 ? 'none' : 'auto',
              transition: 'opacity 0.3s ease-out',
            }}
          >
            <Canvas>
              <Stars
                radius={300}
                depth={60}
                count={5000}
                factor={7}
                saturation={0}
                fade
              />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <EarthAnimation theme={theme} />
            </Canvas>
          </div>
        </div>

        <div
          ref={homeRef}
          style={{
            minHeight: '50vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <HeroSection theme={theme} />
        </div>

        <div
          ref={projectRef}
          style={{
            minHeight: '100vh',
            paddingTop: '2rem',
            paddingBottom: '2rem',
          }}
        >
          <ProjectsSection theme={theme} />
        </div>

        <div
          ref={resumeRef}
          style={{
            minHeight: '100vh',
            paddingTop: '2rem',
            paddingBottom: '2rem',
          }}
        >
          <ResumeSection theme={theme} />
        </div>

        <div
          ref={contactRef}
          style={{
            minHeight: '100vh',
            paddingTop: '2rem',
            paddingBottom: '2rem',
          }}
        >
          <ContactSection theme={theme} />
        </div>
      </div>
    </div>
  );
}
