interface Location {
  continent: string;
  coordinates: Coordinates;
  nearbyLandmarks: Landmark[];
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface Landmark {
  name: string;
  type: string;
  distance: number;
}

export default Location;
