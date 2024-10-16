'use client';

import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

interface ThemeToggleProps {
  theme: string;
  onThemeChange: (newTheme: string) => void;
}

export default function ThemeToggle({
  theme,
  onThemeChange,
}: ThemeToggleProps) {
  const handleClick = () => {
    const newTheme = theme === 'retro' ? 'night' : 'retro';
    onThemeChange(newTheme);
  };

  return (
    <button
      onClick={handleClick}
      className={`rounded-full p-3 text-2xl ${
        theme === 'retro'
          ? 'bg-gray-500 text-white'
          : 'bg-black text-yellow-500'
      }`}
    >
      {theme === 'retro' ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
    </button>
  );
}
