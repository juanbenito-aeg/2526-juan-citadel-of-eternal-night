import { Dispatch, SetStateAction } from "react";
import { Section } from "../constants";
import CitadelData from "./CitadelData";

interface NavigationProps {
  citadelData: CitadelData;
  activeSection: Section;
  setActiveSection: Dispatch<SetStateAction<Section>>;
}

interface NavigationLinkProps {
  title: string;
  activeSection: Section;
  setActiveSection: any;
}

export type { NavigationProps, NavigationLinkProps };
