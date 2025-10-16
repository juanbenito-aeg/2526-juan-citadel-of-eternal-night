import { Defenses } from "./Defenses";
import History from "./History";
import { Inhabitants } from "./Inhabitants";
import { Location } from "./Location";
import { Resources } from "./Resources";

interface CitadelData {
  name: string;
  location: Location;
  defenses: Defenses;
  inhabitants: Inhabitants;
  resources: Resources;
  history: History;
}

export default CitadelData;
