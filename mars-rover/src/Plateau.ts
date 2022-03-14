import { Coordinates } from "./Coordinates";

export class Plateau {
  constructor(private size: number) {}

  public areCoordinatesInsideBoundaries(coordinates: Coordinates): boolean {
    return (
      coordinates.getX() >= 0 &&
      coordinates.getX() < this.size &&
      coordinates.getY() >= 0 &&
      coordinates.getY() < this.size
    );
  }
}
