'use client';

import { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import HeroSection from '@/component/HeroSection';
import ProjectsSection from '@/component/ProjectsSection';
import ContactSection from '@/component/ContactSection';
import Header from '@/component/Header';
import EarthAnimation from '@/component/EarthAnimation';

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [theme, setTheme] = useState<string>('retro');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  const homeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const EARTH_ANIMATION_HEIGHT = '100vh';
  const HEADER_HEIGHT = '5rem';

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'retro';
    setTheme(storedTheme);
    document.documentElement.setAttribute('data-theme', storedTheme);

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
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

    const backgroundColor = newTheme === 'night' ? '#374150' : '#e7e0d6';
    document.body.style.backgroundColor = backgroundColor;
  };

  const handleLinkClick = (section: string) => {
    setActiveSection(section);

    if (section === 'home' && homeRef.current) {
      const elementTop = homeRef.current.offsetTop;
      const windowHeight = window.innerHeight;
      const elementHeight = homeRef.current.offsetHeight;

      const offset = elementTop - (windowHeight - elementHeight) / 2;

      setTimeout(() => {
        window.scrollTo({
          top: Math.max(0, offset),
          behavior: 'smooth',
        });
      }, 100);
    } else if (section === 'project' && projectRef.current) {
      projectRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    } else if (section === 'contact' && contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Header
        activeSection={activeSection}
        onLinkClick={handleLinkClick}
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
          className="px-0 sm:px-4"
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: isSmallScreen ? '4rem' : '2rem',
          }}
        >
          <HeroSection theme={theme} />
        </div>

        <div
          ref={projectRef}
          className="px-0 sm:px-4"
          style={{
            minHeight: '100vh',
            paddingTop: isSmallScreen ? '5rem' : '3rem',
            paddingBottom: isSmallScreen ? '2rem' : '1rem',
          }}
        >
          <ProjectsSection theme={theme} />
        </div>

        <div
          ref={contactRef}
          className="px-0 sm:px-4"
          style={{
            minHeight: '30vh',
            paddingTop: isSmallScreen ? '5rem' : '1rem',
            paddingBottom: isSmallScreen ? '3rem' : '2rem',
          }}
        >
          <ContactSection theme={theme} />
        </div>
      </div>
    </div>
  );
}
