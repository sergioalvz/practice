import { writeFileSync } from "fs";
import { options } from "yargs";
import { Board } from "./Board";

function App() {
  const { argv } = options({
    input: { type: "string", demand: true },
    output: { type: "string", demand: true },
  });

  const board = Board.fromFile(argv.input);

  writeFileSync(
    argv.output,
    board
      .evolve()
      .toArray()
      .map((row) => row.join(" "))
      .join("\n"),
    { encoding: "utf-8" },
  );
}

App();
