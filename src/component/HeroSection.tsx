import React from 'react';
import { useTranslations } from 'next-intl';

const HeroSection = React.forwardRef<HTMLDivElement>((props, ref) => {
  const t = useTranslations('HomePage');
  return (
    <section
      id="home"
      ref={ref}
      className="flex flex-col items-center justify-center px-7 md:h-auto md:px-12  lg:flex lg:flex-row lg:items-start lg:justify-between lg:gap-32 lg:px-36 lg:pt-16"
    >
      <div className="mb-8 lg:mb-0 lg:w-1/2">
        <h1 className="mb-4 text-5xl font-bold"> {t('title')}</h1>
        <p className="mb-6 text-lg">
          As a software engineer, I’m passionate about solving complex problems
          and creating impactful solutions. I push boundaries to build systems
          that enrich lives and deliver meaningful experiences, always thinking
          beyond the conventional to bring ideas to life.
        </p>
        <div className="mb-6 flex justify-center space-x-4 lg:justify-start">
          <span className="badge badge-primary">Developer</span>
          <span className="badge badge-secondary">Physician</span>
          <span className="badge badge-accent">Writer</span>
        </div>
      </div>

      <div className="flex justify-center lg:w-1/2 lg:justify-start">
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://avatar.iran.liara.run/public/79"
            alt="Ellen Ho"
            className="h-64 w-64 rounded-full object-cover lg:h-80 lg:w-80"
          />
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
