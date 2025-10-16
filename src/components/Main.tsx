import { Section } from "../constants";
import { MainProps } from "../interfaces/Main";
import Defenses from "./Defenses/Defenses";
import History from "./History/History";
import Inhabitants from "./Inhabitants/Inhabitants";
import Location from "./Location/Location";
import Resources from "./Resources/Resources";

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
      content = (
        <Defenses
          walls={citadelData.defenses.walls}
          towers={citadelData.defenses.towers}
        />
      );
      break;
    }

    case Section.INHABITANTS: {
      content = <Inhabitants roles={citadelData.inhabitants.roles} />;
      break;
    }

    case Section.RESOURCES: {
      content = (
        <Resources
          storage={citadelData.resources.storage}
          armory={citadelData.resources.armory}
        />
      );
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
