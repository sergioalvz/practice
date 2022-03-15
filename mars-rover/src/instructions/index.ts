import { Command } from "../Command";
import { Unknown } from "./Unknown";
import { TurnLeft } from "./TurnLeft";
import { Rover } from "../Rover";
import { TurnRight } from "./TurnRight";
import { Move } from "./Move";

export function makeInstruction(instruction: string, rover: Rover): Command {
  switch (instruction) {
    case "L":
      return new TurnLeft(rover);
    case "R":
      return new TurnRight(rover);
    case "M":
      return new Move(rover);
    default:
      return new Unknown();
  }
}
