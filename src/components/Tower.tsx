import { Tower as TowerProps } from "../interfaces/Defenses";

function Tower({ name, height, armament, guards }: TowerProps) {
  return (
    <div className="border">
      <h4>{name}</h4>

      <p>Height: {height} m</p>
    </div>
  );
}

export default Tower;
