'use client';

import React from 'react';
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
  return (
    <header
      className={`fixed left-0 top-0 z-[9999] h-20 w-full transition-colors duration-300 ${
        theme === 'night' ? 'bg-[#374150]' : 'bg-[#e7e0d6]'
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-10">
        <div className="flex items-center space-x-4">
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

        <nav className="flex justify-center space-x-6">
          <div className="btn-group rounded-full p-2">
            <NavLink
              section="home"
              label="Home"
              activeSection={activeSection}
              onClick={onLinkClick}
            />
            <NavLink
              section="project"
              label="Project"
              activeSection={activeSection}
              onClick={onLinkClick}
            />
            <NavLink
              section="contact"
              label="Contact"
              activeSection={activeSection}
              onClick={onLinkClick}
            />
          </div>
        </nav>

        <div className="flex items-center space-x-8">
          <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
        </div>
      </div>
    </header>
  );
};

export default Header;
