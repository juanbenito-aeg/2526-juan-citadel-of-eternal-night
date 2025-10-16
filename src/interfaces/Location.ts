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

interface LocationProps {
  citadelName: string;
  locationData: Location;
}

interface LandmarksProps {
  landmarks: Landmark[];
}

export type { Location, LocationProps, Landmark, LandmarksProps };
