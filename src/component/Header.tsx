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

  const navBackgroundColor =
    theme === 'night'
      ? 'bg-neutral shadow-[rgba(0, 0, 0, 0.6) 0px 4px 12px]'
      : 'bg-base-100 shadow-[rgba(0, 0, 0, 0.1) 0px 4px 12px]';
  const borderColor = theme === 'night' ? 'border-gray-700' : 'border-gray-300';
  const navShadow =
    theme === 'night'
      ? 'shadow-[rgba(0, 0, 0, 0.8) 0px 4px 12px]'
      : 'shadow-[rgba(0, 0, 0, 0.15) 0px 4px 12px]';

  return (
    <header
      className={`fixed left-0 top-0 z-[9999] h-20 w-full ${
        theme === 'night' ? 'bg-neutral' : 'bg-base-200'
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
            isMenuOpen ? 'flex' : 'hidden'
          } ${navBackgroundColor} absolute right-0 top-16 z-50 w-1/3 flex-col space-y-4 rounded-lg p-4 lg:static lg:flex lg:w-auto lg:flex-row lg:space-x-6 lg:space-y-0 lg:bg-transparent lg:p-0 ${navShadow}`}
        >
          <div className="flex justify-center lg:hidden">
            <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
          </div>

          <div className="flex flex-col items-center lg:flex-row lg:space-x-6">
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
        </nav>

        <div className="hidden items-center space-x-8 lg:flex">
          <ThemeToggle theme={theme} onThemeChange={onThemeChange} />
        </div>
      </div>
    </header>
  );
};

export default Header;
