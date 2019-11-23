import { Board } from "./Board";
import { readFileSync } from "fs";

export class BoardReader {
  public readFromFile({ path }: { path: string }): Board {
    return new Board(
      readFileSync(path, { encoding: "utf-8" })
        .trim()
        .split("\n")
        .map((row) => row.split(" ").map((cell) => parseInt(cell, 10))),
    );
  }
}
