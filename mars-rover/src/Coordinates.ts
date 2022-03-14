export class Coordinates {
  constructor(private x: number, private y: number) {}

  public getX(): number {
    return this.x;
  }

  public getY(): number {
    return this.y;
  }

  public plus(coordinates: Coordinates): Coordinates {
    return new Coordinates(this.x + coordinates.getX(), this.y + coordinates.getY());
  }
}
