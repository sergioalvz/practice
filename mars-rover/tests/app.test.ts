import { App } from "../src/app";
import { Coordinates } from "../src/Coordinates";
import { makeEast, makeNorth } from "../src/directions";
import { Plateau } from "../src/Plateau";
import { Rover } from "../src/Rover";

describe("App", () => {
  describe("#run", () => {
    describe("working without obstacles", function () {
      let app: App;

      beforeEach(() => {
        app = new App([new Rover(new Coordinates(0, 0), makeNorth(), new Plateau(5))]);
      });

      it("returns the initial direction if the set of instructions is empty", async () => {
        expect(app.run([""])).toEqual(["0:0:N"]);
      });

      it("can move the rovers to the right", async () => {
        expect(app.run(["RRR"])).toEqual(["0:0:W"]);
      });

      it("can moven the rovers to the left", async () => {
        expect(app.run(["LL"])).toEqual(["0:0:S"]);
      });

      it("keeps the state between executions", async () => {
        expect(app.run(["R"])).toEqual(["0:0:E"]);
        expect(app.run(["R"])).toEqual(["0:0:S"]);
        expect(app.run(["L"])).toEqual(["0:0:E"]);
        expect(app.run(["L"])).toEqual(["0:0:N"]);
      });

      it("can move a rover forward", async () => {
        expect(app.run(["RM"])).toEqual(["1:0:E"]);
        expect(app.run(["RM"])).toEqual(["1:1:S"]);
        expect(app.run(["MMMLMM"])).toEqual(["3:4:E"]);
      });

      it("prevents rovers to go beyond the plateu limits", async () => {
        expect(app.run(["M"])).toEqual(["0:0:N"]);
        expect(app.run(["LM"])).toEqual(["0:0:W"]);
        expect(app.run(["RRMMMMMMMMMMMM"])).toEqual(["4:0:E"]);
        expect(app.run(["RMMMMMMMMMMMMMRM"])).toEqual(["3:4:W"]);
      });

      it("ignores unknown instructions", function () {
        expect(app.run(["RJJJJJSSSTM"])).toEqual(["1:0:E"]);
      });
    });

    describe("working with obstacles", function () {
      it("reports obstacles when faced", function () {
        const app = new App([new Rover(new Coordinates(0, 0), makeEast(), new Plateau(5, [new Coordinates(1, 0)]))]);

        expect(app.run(["M"])).toEqual(["0:0:0:E"]);
      });

      it("does not even rotate when facing an obstacle", function () {
        const app = new App([new Rover(new Coordinates(0, 0), makeEast(), new Plateau(5, [new Coordinates(1, 0)]))]);

        expect(app.run(["MRRRL"])).toEqual(["0:0:0:E"]);
      });
    });
  });
});
