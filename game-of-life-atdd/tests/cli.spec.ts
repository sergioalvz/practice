import { execSync } from "child_process";
import { join } from "path";
import { readFileSync } from "fs";

describe("cli", () => {
  const subject = join(__dirname, "../src/cli.ts");

  describe("with default behavior", () => {
    it("supports underpopulation", async () => {
      const outputFilename = join(__dirname, "./results/underpopulation");

      play(`${subject} --input=${join(__dirname, "./fixtures/underpopulation")} --output=${outputFilename}`);

      const result = getResult(outputFilename);

      expect(result).toEqual(["0 0 0", "0 0 0", "0 0 0"].join("\n"));
    });

    it("supports overpopulation", async () => {
      const outputFilename = join(__dirname, "./results/overpopulation");

      play(`${subject} --input=${join(__dirname, "./fixtures/overpopulation")} --output=${outputFilename}`);

      const result = getResult(outputFilename);

      expect(result).toEqual(["1 0 1", "0 0 0", "1 0 1"].join("\n"));
    });

    it("supports ideal conditions", async () => {
      const outputFilename = join(__dirname, "./results/ideal");

      play(`${subject} --input=${join(__dirname, "./fixtures/ideal")} --output=${outputFilename}`);

      const result = getResult(outputFilename);

      expect(result).toEqual(["0 0 0", "1 1 0", "1 1 0"].join("\n"));
    });

    it("supports revival", async () => {
      const outputFilename = join(__dirname, "./results/revival");

      play(`${subject} --input=${join(__dirname, "./fixtures/revival")} --output=${outputFilename}`);

      const result = getResult(outputFilename);

      expect(result).toEqual(["1 1 0", "1 1 0", "0 0 0"].join("\n"));
    });
  });

  describe("with --iterations", () => {
    it("throws an error if the number of iterations is smaller than 1", async () => {
      expect(() =>
        play(
          `${subject} --input=${join(__dirname, "./fixtures/revival")} --output=${join(
            __dirname,
            "./results/revival",
          )} --iterations=0`,
        ),
      ).toThrowError();

      expect(() =>
        play(
          `${subject} --input=${join(__dirname, "./fixtures/revival")} --output=${join(
            __dirname,
            "./results/revival",
          )} --iterations=-1`,
        ),
      ).toThrowError();
    });

    it("performs the specific number of iterations", async () => {
      const outputFilename = join(__dirname, "./results/iterations");

      play(`${subject} --input=${join(__dirname, "./fixtures/iterations")} --output=${outputFilename} --iterations=2`);

      const result = getResult(outputFilename);

      expect(result).toEqual(["0 0 0", "0 1 0", "0 1 0"].join("\n"));
    });
  });
});

function play(cmd: string) {
  return execSync(`npx ts-node ${cmd}`);
}

function getResult(path: string): string {
  return readFileSync(path, { encoding: "utf-8" }).trim();
}
