import { writeFileSync } from "fs";
import { Board } from "./Board";

export class BoardWriter {
  constructor(private board: Board) {}

  public writeToFile({ path }: { path: string }) {
    writeFileSync(
      path,
      this.board
        .toArray()
        .map((row) => row.join(" "))
        .join("\n"),
      { encoding: "utf-8" },
    );
  }
}
