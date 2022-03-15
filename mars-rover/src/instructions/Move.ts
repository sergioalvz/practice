import { Command } from "../Command";
import { Rover } from "../Rover";

export class Move implements Command {
  constructor(private rover: Rover) {}

  execute() {
    this.rover.move();
  }
}
