import React from 'react';

interface HeroSectionProps {
  theme: string;
}

const HeroSection = React.forwardRef<HTMLDivElement, HeroSectionProps>(
  ({ theme }, ref) => {
    const textColor = theme === 'night' ? 'text-[#e0e0e0]' : 'text-black';

    return (
      <section
        id="home"
        ref={ref}
        className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-10 md:h-auto lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-32 lg:pt-16"
      >
        <div className="mb-8 lg:mb-0 lg:w-2/3">
          <h1 className={`mb-4 text-5xl font-bold ${textColor}`}>
            Hi, I am Ellen Ho 👋
          </h1>
          <p className={`mb-6 text-lg ${textColor}`}>
            As a software engineer, I’m passionate about solving complex
            problems and creating impactful solutions. I push boundaries to
            build systems that enrich lives and deliver meaningful experiences,
            always thinking beyond the conventional to bring ideas to life.
          </p>
          <div className="mb-6 flex justify-center space-x-4 lg:justify-start">
            <span className="badge badge-primary">Developer</span>
            <span className="badge badge-secondary">Physician</span>
            <span className="badge badge-accent">Writer</span>
          </div>
        </div>

        <div className="flex justify-center lg:w-1/3 lg:justify-start">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://avatar.iran.liara.run/public/79"
              alt="Ellen Ho"
              className="h-80 w-80 rounded-full object-cover lg:h-96 lg:w-96"
            />
          </div>
        </div>
      </section>
    );
  },
);

HeroSection.displayName = 'HeroSection';

export default HeroSection;
