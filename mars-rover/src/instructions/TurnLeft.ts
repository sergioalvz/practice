import { Command } from "../Command";
import { Rover } from "../Rover";

export class TurnLeft implements Command {
  constructor(private rover: Rover) {}

  execute() {
    this.rover.turnLeft();
  }
}
