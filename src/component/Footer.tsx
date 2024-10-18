interface FooterProps {
  theme: string;
}

const Footer: React.FC<FooterProps> = ({ theme }) => {
  const bgColor = theme === 'night' ? 'bg-gray-800' : 'bg-[#cf8481]';
  const textColor = theme === 'night' ? 'text-white' : 'text-black';

  return (
    <footer className={`w-full py-4 text-center ${bgColor} ${textColor}`}>
      <p>© 2024 Ellen Ho. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
