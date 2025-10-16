import { Section } from "../constants";
import { SetActiveSection } from "./App";
import CitadelData from "./CitadelData";

interface NavigationProps {
  citadelData: CitadelData | null;
  activeSection: Section;
  setActiveSection: SetActiveSection;
}

interface NavigationLinkProps {
  title: string;
  activeSection: Section;
  setActiveSection: SetActiveSection;
}

export type { NavigationProps, NavigationLinkProps };
