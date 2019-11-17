import { execSync } from "child_process";
import { join } from "path";
import { readFileSync } from "fs";

describe("cli", () => {
  const subject = join(__dirname, "../src/cli.ts");

  describe("with default behavior", () => {
    it("supports underpopulation", async () => {
      const outputFilename = join(__dirname, "./results/underpopulation");

      exec(`${subject} --input=${join(__dirname, "./fixtures/underpopulation")} --output=${outputFilename}`);

      const result = getResult(outputFilename);

      expect(result).toEqual(["0 0 0", "0 0 0", "0 0 0"].join("\n"));
    });

    it("supports overpopulation", async () => {
      const outputFilename = join(__dirname, "./results/overpopulation");

      exec(`${subject} --input=${join(__dirname, "./fixtures/overpopulation")} --output=${outputFilename}`);

      const result = getResult(outputFilename);

      expect(result).toEqual(["1 0 1", "0 0 0", "1 0 1"].join("\n"));
    });

    it("supports ideal conditions", async () => {
      const outputFilename = join(__dirname, "./results/ideal");

      exec(`${subject} --input=${join(__dirname, "./fixtures/ideal")} --output=${outputFilename}`);

      const result = getResult(outputFilename);

      expect(result).toEqual(["0 0 0", "1 1 0", "1 1 0"].join("\n"));
    });

    it("supports revival", async () => {
      const outputFilename = join(__dirname, "./results/revival");

      exec(`${subject} --input=${join(__dirname, "./fixtures/revival")} --output=${outputFilename}`);

      const result = getResult(outputFilename);

      expect(result).toEqual(["1 1 0", "1 1 0", "0 0 0"].join("\n"));
    });
  });
});

function exec(cmd: string) {
  return execSync(`npx ts-node ${cmd}`);
}

function getResult(path: string): string {
  return readFileSync(path, { encoding: "utf-8" }).trim();
}
