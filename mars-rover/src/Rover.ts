import { Coordinates } from "./Coordinates";
import { Direction } from "./Direction";
import { Plateau } from "./Plateau";

export class Rover {
  constructor(private coordinates: Coordinates, private direction: Direction, private plateau: Plateau) {}

  public turnLeft(): void {
    this.direction = this.direction.left();
  }

  public turnRight(): void {
    this.direction = this.direction.right();
  }

  public move(): void {
    const desiredCoordinates = this.coordinates.plus(this.direction.movement());

    if (this.plateau.areCoordinatesInsideBoundaries(desiredCoordinates)) {
      this.coordinates = desiredCoordinates;
    }
  }

  public toString(): string {
    return `${this.coordinates.getX()}:${this.coordinates.getY()}:${this.direction.toString()}`;
  }
}
