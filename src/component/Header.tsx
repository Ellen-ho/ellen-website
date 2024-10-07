import React from 'react';
import NavLink from './NavLink';
import { useTranslations } from 'next-intl';

interface HeaderProps {
  activeSection: string;
  onLinkClick: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onLinkClick }) => {
  const t = useTranslations('HomePage');
  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between p-4">
      <div className="flex items-center space-x-2">
        <img
          src="/images/code-editor-icon.png"
          alt="Code Editor Icon"
          className="h-8 w-8"
        />
        <div className="text-xl font-bold">Ellen Ho</div>
      </div>

      <nav className="flex justify-center">
        <div className="btn-group bg-base-100 rounded-full p-2 shadow-md">
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
            section="resume"
            label="Resume"
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

      <div className="flex items-center space-x-4">
        <a href="/en">{t('english')}</a>
        <a href="/zh-TW">{t('chinese')}</a>
      </div>
    </header>
  );
};

export default Header;
