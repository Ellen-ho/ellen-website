import React from 'react';
import ProjectCard from './ProjectCard';

interface ProjectsSectionProps {
  theme: string;
}

const ProjectsSection = React.forwardRef<HTMLDivElement, ProjectsSectionProps>(
  ({ theme }, ref) => {
    const projects = [
      {
        title: 'Clinic Pulse',
        prefix: 'clinic-pulse',
        description:
          'A full-stack clinic management platform designed to integrate real-time data, detailed lists, and charts to enhance clinic management efficiency.',
        techStack: [
          'React',
          'Material UI',
          'TypeScript',
          'Node.js',
          'Express',
          'PostgreSQL',
          'TypeORM',
          'BullMQ',
          'Redis',
          'Docker',
          'AWS EC2',
          'RDS',
          'S3',
          'CloudFront',
          'ELB',
          'GitHub Actions',
          'Jest (Unit & Integration Tests)',
        ],
        imageUrls: [
          {
            src: '/images/clinic-pic.png',
            alt: 'Slide 1',
          },
          {
            src: '/images/real_time.gif',
            alt: 'Slide 2',
          },
          {
            src: '/images/consultation_list-54cd9ceb.gif',
            alt: 'Slide 3',
          },
          {
            src: '/images/report.gif',
            alt: 'Slide 4',
          },
        ],
        demoUrl: 'https://myclinics.life/',
        repoUrl: 'https://github.com/Ellen-ho/clinic-pulse-api',
      },
      {
        title: 'Medi Connect',
        prefix: 'medi-connect',
        description:
          'A full-stack project designed to help doctors and patients understand health and make informed decisions beyond clinic hours. The frontend is deployed on Vercel, and the backend is deployed on Render.',
        techStack: [
          'React',
          'Material UI',
          'TypeScript',
          'Node.js',
          'Express',
          'PostgreSQL',
          'TypeORM',
          'Docker',
          'Jest (Unit & Integration Tests)',
          'Swagger (API Documentation)',
        ],
        imageUrls: [
          {
            src: '/images/medi-pic.png',
            alt: 'Slide 1',
          },
          {
            src: '/images/views-patient-info.gif',
            alt: 'Slide 2',
          },
          {
            src: '/images/book-appointment.gif',
            alt: 'Slide 3',
          },
          {
            src: '/images/patient-record.gif',
            alt: 'Slide 4',
          },
        ],
        demoUrl: 'https://medi-connect-ui.vercel.app/',
        repoUrl: 'https://github.com/Ellen-ho/medi-connect-api',
      },
      {
        title: 'Taipei Day Trip',
        prefix: 'taipei-day-trip',
        description:
          'A full-stack project: an e-commerce travel platform that helps users easily explore Taipei’s attractions and offers online booking and purchase of travel plans.',
        techStack: [
          'JavaScript',
          'AJAX',
          'HTML',
          'CSS',
          'RWD',
          'Python',
          'FastAPI',
          'MySQL',
          'JWT (Authentication)',
          'TapPay (Payment Gateway)',
          'i18next (Internationalization)',
        ],
        imageUrls: [
          {
            src: '/images/taipei-pic.png',
            alt: 'Slide 1',
          },
          {
            src: '/images/signin_signup.png',
            alt: 'Slide 2',
          },
          {
            src: '/images/booking.png',
            alt: 'Slide 3',
          },
          {
            src: '/images/order.png',
            alt: 'Slide 4',
          },
        ],
        demoUrl: 'https://travelco.agency/',
        repoUrl: 'https://github.com/Ellen-ho/taipei-day-trip',
      },
    ];

    const textColor = theme === 'night' ? 'text-white' : 'text-black';

    return (
      <section
        id="project"
        ref={ref}
        className={`mx-7 mb-16 pt-24 md:mb-0 lg:mx-40 ${textColor}`}
      >
        <h1 className="mb-8 text-center text-4xl font-bold">Projects</h1>
        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              theme={theme}
              prefix={project.prefix}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              imageUrls={project.imageUrls}
              demoUrl={project.demoUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
      </section>
    );
  },
);

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;
