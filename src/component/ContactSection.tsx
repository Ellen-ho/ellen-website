import React from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa';
import ContactContent from './ContactContent';

interface ContactSectionProps {
  theme: string;
}

const ContactSection = React.forwardRef<HTMLDivElement, ContactSectionProps>(
  ({ theme }, ref) => {
    const textColor = theme === 'night' ? 'text-white' : 'text-black';
    const iconColor = theme === 'night' ? 'text-yellow-500' : 'text-gray-500';
    const hoverColor =
      theme === 'night' ? 'hover:text-yellow-300' : 'hover:text-gray-700';

    return (
      <section
        id="contact"
        ref={ref}
        className={`mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24 ${textColor}`}
      >
        <h1 className="mb-8 text-center text-4xl font-bold">Contact</h1>

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="-ml-10 lg:w-2/3 lg:pr-16">
            <ContactContent theme={theme} />
          </div>

          <div className="flex flex-col items-center lg:w-1/3 lg:items-start lg:pl-16">
            <h2 className="mb-4 text-2xl font-semibold">Find me on</h2>
            <div className={`mb-8 flex space-x-8 ${iconColor}`}>
              <a
                href="https://github.com/Ellen-ho"
                target="_blank"
                rel="noopener noreferrer"
                className={`cursor-pointer text-5xl ${hoverColor} transition-colors duration-200`}
                style={{ zIndex: 10 }}
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`cursor-pointer text-5xl ${hoverColor} transition-colors duration-200`}
                style={{ zIndex: 10 }}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://medium.com/@ellen31725"
                target="_blank"
                rel="noopener noreferrer"
                className={`cursor-pointer text-5xl ${hoverColor} transition-colors duration-200`}
                style={{ zIndex: 10 }}
              >
                <FaMedium />
              </a>
              <a
                href="mailto:ellen31725@gmail.com"
                className={`cursor-pointer text-5xl ${hoverColor} transition-colors duration-200`}
                style={{ zIndex: 10 }}
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  },
);

ContactSection.displayName = 'ContactSection';

export default ContactSection;
