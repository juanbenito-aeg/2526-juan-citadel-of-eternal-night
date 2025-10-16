import { TowersProps } from "../interfaces/Defenses";
import Tower from "./Tower";

function Towers({ towers }: TowersProps) {
  return (
    <>
      <h3>Towers</h3>

      <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-3">
        {towers.map((tower, index) => {
          return (
            <Tower
              key={index}
              name={tower.name}
              height={tower.height}
              armament={tower.armament}
              guards={tower.guards}
            />
          );
        })}
      </div>
    </>
  );
}

export default Towers;
