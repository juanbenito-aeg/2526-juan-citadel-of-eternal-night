import { MAX_AMMUNITION_COUNT } from "../../constants";
import { Armament as ArmamentProps } from "../../interfaces/Defenses";

function Armament({
  weaponType,
  ammunitionType,
  ammunitionCount,
}: ArmamentProps) {
  const ammunitionCountAsPercentage =
    (ammunitionCount * 100) / MAX_AMMUNITION_COUNT;

  let ammunitionCountBarBackgroundColor: string = "";

  if (ammunitionCountAsPercentage <= 25) {
    ammunitionCountBarBackgroundColor = "bg-red-600";
  } else if (ammunitionCountAsPercentage <= 50) {
    ammunitionCountBarBackgroundColor = "bg-orange-500";
  } else {
    ammunitionCountBarBackgroundColor = "bg-green-500";
  }

  return (
    <>
      <h5>Armament</h5>

      <p>
        {weaponType} — {ammunitionType} — {ammunitionCount}
      </p>

      <div className="h-2.5 w-full rounded-full bg-gray-700">
        <div
          className={`h-2.5 rounded-full ${ammunitionCountBarBackgroundColor}`}
          style={{
            width: `${ammunitionCountAsPercentage}%`,
          }}
        ></div>
      </div>
    </>
  );
}

export default Armament;
