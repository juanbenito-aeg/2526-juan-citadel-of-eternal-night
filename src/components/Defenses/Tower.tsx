import { Tower as TowerProps } from "../../interfaces/Defenses";
import Armament from "./Armament";
import Guards from "./Guards";

function Tower({ name, height, armament, guards }: TowerProps) {
  return (
    <div className="border">
      <h4>{name}</h4>

      <p>Height: {height} m</p>

      <Armament
        weaponType={armament.weaponType}
        ammunitionType={armament.ammunitionType}
        ammunitionCount={armament.ammunitionCount}
      />

      <Guards guards={guards} />
    </div>
  );
}

export default Tower;
