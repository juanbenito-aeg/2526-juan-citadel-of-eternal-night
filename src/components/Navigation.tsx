import { NavigationProps } from "../interfaces/Navigation";
import NavigationLink from "./NavigationLink";

function Navigation({
  citadelData,
  activeSection,
  setActiveSection,
}: NavigationProps) {
  let relevantCitadelDataKeys: string[] = [];

  if (citadelData !== null) {
    relevantCitadelDataKeys = Object.keys(citadelData!).filter(
      (citadelDataKey) => citadelDataKey !== "name",
    );
  }

  return (
    <nav className="mb-8">
      <ul className="flex justify-evenly bg-blue-300">
        {relevantCitadelDataKeys.map((relevantCitadelDataKey, index) => {
          const navigationLinkTitle =
            relevantCitadelDataKey[0].toUpperCase() +
            relevantCitadelDataKey.slice(1);

          return (
            <NavigationLink
              key={index}
              title={navigationLinkTitle}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
