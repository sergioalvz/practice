import { Rover } from "./Rover";

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
        switch (instruction) {
          case "L":
            rover.turnLeft();
            break;
          case "R":
            rover.turnRight();
            break;
          case "M":
            rover.move();
            break;
          default:
            console.log(`"${instruction}" is not a valid instruction`);
        }
      }

      return rover.toString();
    });
  }
}
