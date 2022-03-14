import { makeEast, makeWest } from ".";
import { Coordinates } from "../Coordinates";
import { Direction } from "../Direction";

export class South extends Direction {
  public movement(): Coordinates {
    return new Coordinates(0, 1);
  }

  public left(): Direction {
    return makeEast();
  }

  public right(): Direction {
    return makeWest();
  }

  public toString(): string {
    return "S";
  }
}
