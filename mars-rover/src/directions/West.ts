import { makeNorth, makeSouth } from ".";
import { Coordinates } from "../Coordinates";
import { Direction } from "../Direction";

export class West extends Direction {
  public movement(): Coordinates {
    return new Coordinates(-1, 0);
  }

  public left(): Direction {
    return makeSouth();
  }

  public right(): Direction {
    return makeNorth();
  }

  public toString(): string {
    return "W";
  }
}
