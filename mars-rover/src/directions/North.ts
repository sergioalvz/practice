import { makeEast, makeWest } from ".";
import { Coordinates } from "../Coordinates";
import { Direction } from "../Direction";

export class North extends Direction {
  public movement(): Coordinates {
    return new Coordinates(0, -1);
  }

  public left(): Direction {
    return makeWest();
  }

  public right(): Direction {
    return makeEast();
  }

  public toString(): string {
    return "N";
  }
}
