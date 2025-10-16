import { Section } from "../constants";
import { MainProps } from "../interfaces/Main";
import Defenses from "./Defenses";
import History from "./History";
import Inhabitants from "./Inhabitants";
import Location from "./Location";
import Resources from "./Resources";

function Main({ citadelData, activeSection }: MainProps) {
  let content;

  switch (activeSection) {
    case Section.LOCATION: {
      content = (
        <Location
          citadelName={citadelData.name}
          locationData={citadelData.location}
        />
      );
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

  return (
    <main className="t mx-auto max-w-6xl border text-center">{content}</main>
  );
}

export default Main;
