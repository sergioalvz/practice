import { Rover } from "./Rover";
import { makeInstruction } from "./instructions";

export class App {
  constructor(private rovers: Rover[]) {}

  public run(commands: string[]): string[] {
    return commands.map((command, index) => {
      const rover = this.rovers[index];

      if (command === "") {
        return rover.toString();
      }

      const instructions = command.split("");

      for (const instruction of instructions) {
        makeInstruction(instruction, rover).execute();
      }

      return rover.toString();
    });
  }
}
