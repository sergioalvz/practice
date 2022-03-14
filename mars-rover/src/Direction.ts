import { Coordinates } from "./Coordinates";

export abstract class Direction {
  public abstract movement(): Coordinates;

  public abstract left(): Direction;

  public abstract right(): Direction;

  public abstract toString(): string;
}
