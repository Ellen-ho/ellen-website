interface NavLinkProps {
  section: string;
  label: string;
  activeSection: string;
  onClick: (section: string) => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  section,
  label,
  activeSection,
  onClick,
}) => {
  const linkClass =
    activeSection === section ? 'btn-active btn-primary' : 'btn-ghost';

  return (
    <a
      href={`#${section}`}
      className={`btn rounded-full ${linkClass}`}
      onClick={() => onClick(section)}
    >
      {label}
    </a>
  );
};

export default NavLink;
