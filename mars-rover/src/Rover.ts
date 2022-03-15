import { Coordinates } from "./Coordinates";
import { Direction } from "./Direction";
import { Plateau } from "./Plateau";

export class Rover {
  private blocked = false;

  constructor(private coordinates: Coordinates, private direction: Direction, private plateau: Plateau) {}

  public turnLeft(): void {
    if (this.blocked) {
      return;
    }

    this.direction = this.direction.left();
  }

  public turnRight(): void {
    if (this.blocked) {
      return;
    }

    this.direction = this.direction.right();
  }

  public move(): void {
    if (this.blocked) {
      return;
    }

    const desiredCoordinates = this.coordinates.plus(this.direction.movement());

    if (this.plateau.areThereAnyObstaclesAt(desiredCoordinates)) {
      this.blocked = true;

      return;
    }

    if (this.plateau.areCoordinatesInsideBoundaries(desiredCoordinates)) {
      this.coordinates = desiredCoordinates;
    }
  }

  public toString(): string {
    const prefix = this.blocked ? "0:" : "";

    return `${prefix}${this.coordinates.getX()}:${this.coordinates.getY()}:${this.direction.toString()}`;
  }
}
