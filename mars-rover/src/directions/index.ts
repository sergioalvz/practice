import { Direction } from "../Direction";
import { East } from "./East";
import { North } from "./North";
import { South } from "./South";
import { West } from "./West";

export function makeNorth(): Direction {
  return new North();
}

export function makeEast(): Direction {
  return new East();
}

export function makeSouth(): Direction {
  return new South();
}

export function makeWest(): Direction {
  return new West();
}
