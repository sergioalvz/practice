import { writeFileSync } from "fs";
import { options } from "yargs";
import { Board } from "./Board";

function App() {
  const { argv } = options({
    input: { type: "string", demand: true },
    output: { type: "string", demand: true },
    iterations: { type: "number", default: 1 },
  });

  if (argv.iterations < 1) {
    process.exit(1);
  }

  const board = Board.fromFile(argv.input);
  const result = Array(argv.iterations)
    .fill(null)
    .reduce((previous: Board) => previous.evolve(), board);

  writeFileSync(
    argv.output,
    result
      .toArray()
      .map((row) => row.join(" "))
      .join("\n"),
    { encoding: "utf-8" },
  );
}

App();
