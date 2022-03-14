import { makeNorth, makeSouth } from ".";
import { Coordinates } from "../Coordinates";
import { Direction } from "../Direction";

export class East extends Direction {
  public movement(): Coordinates {
    return new Coordinates(1, 0);
  }

  public right(): Direction {
    return makeSouth();
  }

  public left(): Direction {
    return makeNorth();
  }

  public toString(): string {
    return "E";
  }
}
