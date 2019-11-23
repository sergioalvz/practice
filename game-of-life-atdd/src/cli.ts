import { options } from "yargs";
import { BoardReader } from "./BoardReader";
import { BoardWriter } from "./BoardWriter";

function App() {
  const { argv } = options({
    input: { type: "string", demand: true },
    output: { type: "string", demand: true },
    iterations: { type: "number", default: 1 },
  });

  const board = new BoardReader().readFromFile({ path: argv.input });

  new BoardWriter(board.evolve(argv.iterations)).writeToFile({ path: argv.output });
}

App();
