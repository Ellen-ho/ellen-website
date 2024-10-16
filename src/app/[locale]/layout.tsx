'use client';

import '@/styles/globals.css';
import { NextIntlClientProvider } from 'next-intl';
import { useEffect, useState } from 'react';

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const [messages, setMessages] = useState({});
  const [theme, setTheme] = useState('retro');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'retro';
    setTheme(storedTheme);
    document.documentElement.setAttribute('data-theme', storedTheme);
  }, []);

  return (
    <html lang={locale} data-theme={theme}>
      <body className={`${theme === 'retro' ? 'bg-[#e7e0d6]' : '#374150'}`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
