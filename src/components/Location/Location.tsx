import { LocationProps } from "../../interfaces/Location";
import Landmarks from "./Landmarks";

export default function Location({ citadelName, locationData }: LocationProps) {
  const continent = locationData.continent;
  const latitude = locationData.coordinates.latitude;
  const longitude = locationData.coordinates.longitude;

  return (
    <>
      <h1>{citadelName}</h1>

      <h2>Continent: {continent}</h2>
      <h2>
        Coordinates: {latitude}°, {longitude}°
      </h2>

      <Landmarks landmarks={locationData.nearbyLandmarks} />
    </>
  );
}
