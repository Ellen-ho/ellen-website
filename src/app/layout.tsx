'use client';

import '@/styles/globals.css';
import { useEffect, useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('retro');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'retro';
    setTheme(storedTheme);
    document.documentElement.setAttribute('data-theme', storedTheme);
  }, []);

  return (
    <html lang="en" data-theme={theme}>
      <body className={`${theme === 'retro' ? 'bg-[#e7e0d6]' : '#374150'}`}>
        {children}
      </body>
    </html>
  );
}
