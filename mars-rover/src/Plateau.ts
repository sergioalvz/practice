import { Coordinates } from "./Coordinates";

export class Plateau {
  constructor(private size: number, private obstacles?: Coordinates[]) {}

  public areThereAnyObstaclesAt(coordinates: Coordinates): boolean {
    const obstacles = this.obstacles || [];

    return obstacles.some((obstacle) => obstacle.equals(coordinates));
  }

  public areCoordinatesInsideBoundaries(coordinates: Coordinates): boolean {
    return (
      coordinates.getX() >= 0 &&
      coordinates.getX() < this.size &&
      coordinates.getY() >= 0 &&
      coordinates.getY() < this.size
    );
  }
}
