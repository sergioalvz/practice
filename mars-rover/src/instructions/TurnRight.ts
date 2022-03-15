import { Command } from "../Command";
import { Rover } from "../Rover";

export class TurnRight implements Command {
  constructor(private rover: Rover) {}

  execute() {
    this.rover.turnRight();
  }
}
