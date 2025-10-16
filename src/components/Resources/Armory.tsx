import { ArmoryProps } from "../../interfaces/Resources";
import Equipment from "./Equipment";

function Armory({ armory }: ArmoryProps) {
  const equipmentTypes: string[] = Object.keys(armory);

  return (
    <>
      <h3>Armory</h3>

      <div className="flex">
        {equipmentTypes.map((equipmentType, index) => {
          return (
            <Equipment
              key={index}
              type={equipmentType}
              list={(armory as any)[equipmentType]}
            />
          );
        })}
      </div>
    </>
  );
}

export default Armory;
