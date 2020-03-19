import { CardFactory } from "../src/CardFactory";
import { Ace } from "../src/cards/Ace";

describe("CardFactory", () => {
  describe("#build", () => {
    it("returns the right Card instance for Aces", () => {
      const subject = new CardFactory();

      const result = subject.build("A", { suit: "Hearts" });

      expect(result).toBeInstanceOf(Ace);
      expect(result.suit).toEqual("Hearts");
    });
  });
});
