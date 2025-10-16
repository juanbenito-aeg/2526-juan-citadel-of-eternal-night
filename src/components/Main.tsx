import { Section } from "../constants";
import { MainProps } from "../interfaces/Main";
import Defenses from "./Defenses";
import History from "./History";
import Inhabitants from "./Inhabitants";
import Location from "./Location";
import Resources from "./Resources";

function Main({ activeSection }: MainProps) {
  let content;

  switch (activeSection) {
    case Section.LOCATION: {
      content = <Location />;
      break;
    }

    case Section.DEFENSES: {
      content = <Defenses />;
      break;
    }

    case Section.INHABITANTS: {
      content = <Inhabitants />;
      break;
    }

    case Section.RESOURCES: {
      content = <Resources />;
      break;
    }

    case Section.HISTORY: {
      content = <History />;
      break;
    }
  }

  return content;
}

export default Main;
