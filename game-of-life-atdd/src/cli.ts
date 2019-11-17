import { options } from "yargs";
import { readFileSync, writeFileSync } from "fs";

const argv = options({
  input: { type: "string", demand: true },
  output: { type: "string", demand: true },
}).argv;

const inputBoard = readFileSync(argv.input, { encoding: "utf-8" });

const matrix = inputBoard
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map((cell) => parseInt(cell, 10)));

const result = matrix.map((row, rowIndx) => {
  return row.map((cell, cellIndx) => {
    const neigh = [
      matrix[rowIndx - 1] && matrix[rowIndx - 1][cellIndx - 1],
      matrix[rowIndx - 1] && matrix[rowIndx - 1][cellIndx],
      matrix[rowIndx - 1] && matrix[rowIndx - 1][cellIndx + 1],
      matrix[rowIndx][cellIndx - 1],
      matrix[rowIndx][cellIndx + 1],
      matrix[rowIndx + 1] && matrix[rowIndx + 1][cellIndx - 1],
      matrix[rowIndx + 1] && matrix[rowIndx + 1][cellIndx],
      matrix[rowIndx + 1] && matrix[rowIndx + 1][cellIndx + 1],
    ];

    const numberOfAliveCells = neigh.filter(Boolean).length;

    if (numberOfAliveCells < 2) {
      return 0;
    }

    if (numberOfAliveCells > 3) {
      return 0;
    }

    if (numberOfAliveCells === 3 && !cell) {
      return 1;
    }

    return cell;
  });
});

writeFileSync(argv.output, result.map((row) => row.join(" ")).join("\n"), { encoding: "utf-8" });
