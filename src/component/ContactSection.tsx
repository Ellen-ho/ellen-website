import React from 'react';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope } from 'react-icons/fa';

interface ContactSectionProps {
  theme: string;
}

const ContactSection = React.forwardRef<HTMLDivElement, ContactSectionProps>(
  ({ theme }, ref) => {
    const textColor = theme === 'night' ? 'text-white' : 'text-black';
    const iconColor = theme === 'night' ? 'text-yellow-500' : 'text-gray-500';

    return (
      <section
        id="contact"
        ref={ref}
        className={`mx-7 pt-24 text-center lg:mx-48 ${textColor}`}
      >
        <h1 className="mb-8 text-center text-4xl font-bold">Contact</h1>

        <div className="flex flex-col items-center">
          <h2 className="mb-4 text-xl font-semibold">Find me on</h2>
          <div className={`mb-8 flex space-x-6 ${iconColor}`}>
            <a
              href="https://github.com/Ellen-ho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://medium.com/@ellen31725"
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl"
            >
              <FaMedium />
            </a>
            <a href="mailto:someone@example.com" className="text-4xl">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </section>
    );
  },
);

ContactSection.displayName = 'ContactSection';

export default ContactSection;
