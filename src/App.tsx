import { useEffect, useState } from "react";
import CitadelData from "./interfaces/CitadelData";

function App() {
  const [citadelData, setCitadelData] = useState<CitadelData | null>(null);

  useEffect(() => {
    (async () => {
      const url = "../public/citadel.json";
      const response = await fetch(url);

      const citadelData = await response.json();
      setCitadelData(citadelData);
    })();
  }, []);

  return <div></div>;
}

export default App;
