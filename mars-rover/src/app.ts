import { Rover } from "./Rover";

export class App {
  constructor(private rovers: Rover[]) {}

  public run(commands: string[]): string[] {
    return this.rovers.map((rover, index) => {
      const command = commands[index];

      if (command === "") {
        return rover.toString();
      }

      const movements = command.split("");

      for (const movement of movements) {
        if (movement === "L") {
          rover.turnLeft();
        }

        if (movement === "R") {
          rover.turnRight();
        }

        if (movement === "M") {
          rover.move();
        }
      }

      return rover.toString();
    });
  }
}
