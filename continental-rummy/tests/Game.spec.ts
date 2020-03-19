import { Game } from "../src/Game";

describe("Game", () => {
  describe("#getNumberOfCardsToDeal", () => {
    let subject: Game;

    beforeEach(() => {
      subject = new Game();
    });

    it("returns the minimum number of cards to perfom the game plus one additional one", async () => {
      expect(subject.getNumberOfCardsToDeal({ trios: 2, straights: 0 })).toBe(7);
      expect(subject.getNumberOfCardsToDeal({ trios: 1, straights: 1 })).toBe(8);
      expect(subject.getNumberOfCardsToDeal({ trios: 0, straights: 3 })).toBe(13);
      expect(subject.getNumberOfCardsToDeal({ trios: 2, straights: 2 })).toBe(15);
    });

    it("throws an exception if the hand is invalid", () => {
      expect(() => subject.getNumberOfCardsToDeal({ trios: -2, straights: 2 })).toThrowError(/Invalid hand/);
      expect(() => subject.getNumberOfCardsToDeal({ trios: 2, straights: -2 })).toThrowError(/Invalid hand/);
    });
  });
});
