type Matrix = number[][];

export class Board {
  constructor(private matrix: Matrix) {}

  public evolve(numberOfIterations = 1): Board {
    if (numberOfIterations < 1) {
      throw new Error("numberOfIterations should be greater or equal than 1");
    }

    return new Board(
      Array(numberOfIterations)
        .fill(null)
        .reduce((matrix: Matrix) => {
          return matrix.map((row, rowIndx) => {
            return row.map((cell, cellIndx) => {
              const numberOfAliveNeighbours = this.getAliveNeighboursAt({ matrix, row: rowIndx, column: cellIndx });

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
        }, this.matrix),
    );
  }

  public toArray(): Matrix {
    return this.matrix;
  }

  private getAliveNeighboursAt({ matrix = this.matrix, row, column }: GetAliveNeighboursAtOptions) {
    const neighbours = [
      matrix[row - 1] && matrix[row - 1][column - 1],
      matrix[row - 1] && matrix[row - 1][column],
      matrix[row - 1] && matrix[row - 1][column + 1],
      matrix[row][column - 1],
      matrix[row][column + 1],
      matrix[row + 1] && matrix[row + 1][column - 1],
      matrix[row + 1] && matrix[row + 1][column],
      matrix[row + 1] && matrix[row + 1][column + 1],
    ];

    return neighbours.filter(Boolean).length;
  }
}

type GetAliveNeighboursAtOptions = {
  column: number;
  matrix: Matrix;
  row: number;
};
