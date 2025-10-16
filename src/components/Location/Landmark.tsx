import { LandmarkType } from "../../constants";
import { Landmark as LandmarkProps } from "../../interfaces/Location";

function Landmark({ name, type, distance }: LandmarkProps) {
  let nameColor: string = "";

  if (type === LandmarkType.CAVE) {
    nameColor = "text-red-500";
  } else if (type === LandmarkType.RUINS) {
    nameColor = "text-yellow-500";
  } else {
    nameColor = "text-blue-500";
  }

  return (
    <li className="flex justify-between">
      <p className={nameColor}>{name}</p>
      <p>{type}</p>
      <p>{distance} km</p>
    </li>
  );
}

export default Landmark;
