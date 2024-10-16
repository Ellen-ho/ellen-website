import React from 'react';
import CarouselWrapper from '@/component/CarouselWrapper';

interface ProjectCardProps {
  prefix: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrls: { src: string; alt: string }[];
  demoUrl: string;
  repoUrl: string;
  theme: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  prefix,
  title,
  description,
  techStack,
  imageUrls,
  demoUrl,
  repoUrl,
  theme,
}) => {
  const textColor = theme === 'night' ? 'text-[#e0e0e0]' : 'text-black';
  const descriptionColor =
    theme === 'night' ? 'text-gray-300' : 'text-gray-600';
  const btnPrimary = theme === 'night' ? 'btn-dark' : 'btn-primary';
  const btnOutline = theme === 'night' ? 'btn-outline-dark' : 'btn-outline';

  const techSkillColor =
    theme === 'night'
      ? 'border-[#ffe999] text-[#ffe999] bg-transparent'
      : 'border-[#000079] text-[#000079] bg-transparent';

  return (
    <div
      className={`mx-auto mb-8 flex max-w-7xl flex-col items-center p-4 lg:flex-row ${textColor}`}
    >
      <div className="flex w-full lg:w-1/2">
        <div className="h-[400px] w-full overflow-hidden rounded-lg">
          <CarouselWrapper images={imageUrls} prefix={prefix} />
        </div>
      </div>

      <div className="mt-4 w-full lg:mt-0 lg:w-1/2 lg:pl-8">
        <h2 className="mb-2 text-2xl font-bold">{title}</h2>

        <div className="mb-4 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              className={`badge ${techSkillColor} rounded border px-2 py-1`}
              key={tech}
            >
              {tech}
            </span>
          ))}
        </div>

        <p className={`mb-4 ${descriptionColor}`}>{description}</p>

        <div className="flex space-x-4">
          <a href={demoUrl} target="_blank" rel="noopener noreferrer">
            <button className={`btn ${btnPrimary}`}>Live Demo</button>
          </a>
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            <button className={`btn ${btnOutline}`}>Repo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
