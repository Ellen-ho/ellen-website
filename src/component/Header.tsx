'use client';

import React, { useCallback, useState } from 'react';
import NavLink from './NavLink';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  activeSection: string;
  onLinkClick: (section: string) => void;
  theme: string;
  onThemeChange: (newTheme: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  activeSection,
  onLinkClick,
  theme,
  onThemeChange,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = useCallback(
    (section: string) => {
      onLinkClick(section);
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsMenuOpen(false);
    },
    [onLinkClick],
  );

  return (
    <header
      className={`fixed left-0 top-0 z-[9999] h-20 w-full ${
        theme === 'night' ? 'bg-[#374150]' : 'bg-[#e7e0d6]'
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-10">
        <div
          className="flex cursor-pointer items-center space-x-4"
          onClick={() => handleClick('home')}
        >
          <img
            id="logo"
            src={
              theme === 'night'
                ? '/images/code-editor-dark.png'
                : '/images/code-editor-icon.png'
            }
            alt="Code Editor Icon"
            className="h-8 w-8"
          />
          <div
            className={`text-xl font-bold ${
              theme === 'night' ? 'text-white' : 'text-black'
            }`}
          >
            Ellen Ho
          </div>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="h-6 w-6 text-black dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
        </div>

        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } absolute left-0 top-16 z-50 w-full flex-col space-y-4 bg-white p-4 lg:static lg:flex lg:w-auto lg:flex-row lg:space-x-6 lg:space-y-0 lg:bg-transparent lg:p-0`}
        >
          <div className="btn-group lg:rounded-full lg:p-2">
            <NavLink
              section="home"
              label="Home"
              activeSection={activeSection}
              onClick={handleClick}
            />
            <NavLink
              section="project"
              label="Project"
              activeSection={activeSection}
              onClick={handleClick}
            />
            <NavLink
              section="contact"
              label="Contact"
              activeSection={activeSection}
              onClick={handleClick}
            />
          </div>

          <div className="flex justify-center lg:hidden">
            <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
          </div>
        </nav>

        <div className="hidden items-center space-x-8 lg:flex">
          <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
        </div>
      </div>
    </header>
  );
};

export default Header;
