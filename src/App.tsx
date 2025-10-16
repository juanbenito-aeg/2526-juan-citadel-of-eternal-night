import { useEffect, useState } from "react";
import CitadelData from "./interfaces/CitadelData";
import Navigation from "./components/Navigation/Navigation";
import { Section } from "./constants";
import Main from "./components/Main";

function App() {
  const [citadelData, setCitadelData] = useState<CitadelData | null>(null);
  const [activeSection, setActiveSection] = useState<Section>(Section.LOCATION);

  useEffect(() => {
    (async () => {
      const url = "/citadel.json";
      const response = await fetch(url);

      const citadelData = await response.json();
      setCitadelData(citadelData);
    })();
  }, []);

  if (citadelData === null) return null;

  return (
    <>
      <Navigation
        citadelData={citadelData}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <Main citadelData={citadelData} activeSection={activeSection} />
    </>
  );
}

export default App;
