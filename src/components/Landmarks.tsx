import Landmark from "./Landmark";
import { LandmarksProps } from "../interfaces/Location";

function Landmarks({ landmarks }: LandmarksProps) {
  landmarks.sort(
    (landmarkA, landmarkB) => landmarkA.distance - landmarkB.distance,
  );

  return (
    <>
      <h2>Nearby Landmarks</h2>

      <ul>
        {landmarks.map((landmark, index) => {
          return (
            <Landmark
              key={index}
              name={landmark.name}
              type={landmark.type}
              distance={landmark.distance}
            />
          );
        })}
      </ul>
    </>
  );
}

export default Landmarks;
