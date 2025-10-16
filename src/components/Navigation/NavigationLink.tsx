import { NavigationLinkProps } from "../../interfaces/Navigation";

function NavigationLink({
  title,
  activeSection,
  setActiveSection,
}: NavigationLinkProps) {
  function handleClick() {
    setActiveSection(title);
  }

  return (
    <li>
      <a
        href="#"
        onClick={handleClick}
        className={`${title === activeSection ? "underline" : ""} hover:underline`}
      >
        {title}
      </a>
    </li>
  );
}

export default NavigationLink;
