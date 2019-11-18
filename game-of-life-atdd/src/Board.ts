import { readFileSync } from "fs";

export class Board {
  public static fromFile(path: string): Board {
    return new Board(
      readFileSync(path, { encoding: "utf-8" })
        .trim()
        .split("\n")
        .map((row) => row.split(" ").map((cell) => parseInt(cell, 10))),
    );
  }

  constructor(private matrix: number[][]) {}

  public evolve(): Board {
    const evolvedMatrix = this.matrix.map((row, rowIndx) => {
      return row.map((cell, cellIndx) => {
        const neighbours = [
          this.matrix[rowIndx - 1] && this.matrix[rowIndx - 1][cellIndx - 1],
          this.matrix[rowIndx - 1] && this.matrix[rowIndx - 1][cellIndx],
          this.matrix[rowIndx - 1] && this.matrix[rowIndx - 1][cellIndx + 1],
          this.matrix[rowIndx][cellIndx - 1],
          this.matrix[rowIndx][cellIndx + 1],
          this.matrix[rowIndx + 1] && this.matrix[rowIndx + 1][cellIndx - 1],
          this.matrix[rowIndx + 1] && this.matrix[rowIndx + 1][cellIndx],
          this.matrix[rowIndx + 1] && this.matrix[rowIndx + 1][cellIndx + 1],
        ];

        const numberOfAliveNeighbours = neighbours.filter(Boolean).length;

        if (numberOfAliveNeighbours < 2) {
          return 0;
        }

        if (numberOfAliveNeighbours > 3) {
          return 0;
        }

        if (numberOfAliveNeighbours === 3 && !cell) {
          return 1;
        }

        return cell;
      });
    });

    return new Board(evolvedMatrix);
  }

  public toArray(): number[][] {
    return this.matrix;
  }
}
