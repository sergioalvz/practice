import { Rover } from "./Rover";
import { makeInstruction } from "./instructions";

export class App {
  constructor(private rovers: Rover[]) {}

  public run(commands: string[]): string[] {
    return commands.map((command, index) => {
      const rover = this.rovers[index];

      command
        .split("")
        .map((instruction) => makeInstruction(instruction, rover))
        .forEach((instruction) => instruction.execute());

      return rover.toString();
    });
  }
}
