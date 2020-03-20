import { CardFactory } from "../src/CardFactory";
import { Cards } from "../src/Cards";

function testRankScore({ rank, score }: { rank: string; score: number }) {
  it(`returns ${score} points for ${rank}`, async () => {
    const subject = new Cards([new CardFactory().build(rank, { suit: "Hearts" })]); // suit doesn't matter here

    const result = subject.getScore();

    expect(result).toBe(score);
  });
}

describe("Cards", () => {
  describe("#getScore", () => {
    testRankScore({ rank: "2", score: 5 });
    testRankScore({ rank: "3", score: 5 });
    testRankScore({ rank: "4", score: 5 });
    testRankScore({ rank: "5", score: 5 });
    testRankScore({ rank: "6", score: 5 });
    testRankScore({ rank: "7", score: 5 });
    testRankScore({ rank: "8", score: 5 });
    testRankScore({ rank: "9", score: 5 });
    testRankScore({ rank: "10", score: 10 });
    testRankScore({ rank: "J", score: 10 });
    testRankScore({ rank: "Q", score: 10 });
    testRankScore({ rank: "K", score: 10 });
    testRankScore({ rank: "A", score: 20 });
    testRankScore({ rank: "∞", score: 50 });

    it("returns 0 if there are no cards", async () => {
      const subject = new Cards([]);

      const score = subject.getScore();

      expect(score).toBe(0);
    });

    it("returns the right score if there are multiple mixed ranks", () => {
      const subject = new Cards([
        new CardFactory().build("∞", { suit: "Hearts" }),
        new CardFactory().build("2", { suit: "Hearts" }),
        new CardFactory().build("Q", { suit: "Hearts" }),
        new CardFactory().build("Q", { suit: "Hearts" }),
        new CardFactory().build("Q", { suit: "Hearts" }),
        new CardFactory().build("2", { suit: "Hearts" }),
        new CardFactory().build("A", { suit: "Hearts" }),
      ]);

      const score = subject.getScore();

      expect(score).toBe(110);
    });
  });

  describe("#getTrios", () => {
    it("returns no trios if there aren't any", () => {
      const subject = new Cards([
        new CardFactory().build("5", { suit: "Hearts" }),
        new CardFactory().build("2", { suit: "Hearts" }),
        new CardFactory().build("Q", { suit: "Hearts" }),
        new CardFactory().build("K", { suit: "Hearts" }),
        new CardFactory().build("J", { suit: "Hearts" }),
        new CardFactory().build("3", { suit: "Hearts" }),
        new CardFactory().build("A", { suit: "Hearts" }),
      ]);

      const trios = subject.getTrios();

      expect(trios).toEqual([]);
    });

    it("returns the existing trio", () => {
      const subject = new Cards([
        new CardFactory().build("5", { suit: "Hearts" }),
        new CardFactory().build("2", { suit: "Hearts" }),
        new CardFactory().build("2", { suit: "Hearts" }),
        new CardFactory().build("2", { suit: "Hearts" }),
        new CardFactory().build("J", { suit: "Hearts" }),
        new CardFactory().build("3", { suit: "Hearts" }),
        new CardFactory().build("A", { suit: "Hearts" }),
      ]);

      const trios = subject.getTrios();

      expect(trios).toEqual([
        new Cards([
          new CardFactory().build("2", { suit: "Hearts" }),
          new CardFactory().build("2", { suit: "Hearts" }),
          new CardFactory().build("2", { suit: "Hearts" }),
        ]),
      ]);
    });

    it("returns multiples existing trios", () => {
      const subject = new Cards([
        new CardFactory().build("5", { suit: "Hearts" }),
        new CardFactory().build("2", { suit: "Hearts" }),
        new CardFactory().build("2", { suit: "Hearts" }),
        new CardFactory().build("2", { suit: "Hearts" }),
        new CardFactory().build("2", { suit: "Hearts" }),
        new CardFactory().build("2", { suit: "Hearts" }),
        new CardFactory().build("2", { suit: "Hearts" }),
      ]);

      const trios = subject.getTrios();

      expect(trios).toEqual([
        new Cards([
          new CardFactory().build("2", { suit: "Hearts" }),
          new CardFactory().build("2", { suit: "Hearts" }),
          new CardFactory().build("2", { suit: "Hearts" }),
        ]),
        new Cards([
          new CardFactory().build("2", { suit: "Hearts" }),
          new CardFactory().build("2", { suit: "Hearts" }),
          new CardFactory().build("2", { suit: "Hearts" }),
        ]),
      ]);
    });
  });

  describe("#getStraights", () => {
    it("returns no straights if there are not any", () => {
      const subject = new Cards([
        new CardFactory().build("A", { suit: "Hearts" }),
        new CardFactory().build("2", { suit: "Diamonds" }),
        new CardFactory().build("3", { suit: "Clubs" }),
        new CardFactory().build("4", { suit: "Clubs" }),
        new CardFactory().build("5", { suit: "Spades" }),
        new CardFactory().build("6", { suit: "Hearts" }),
        new CardFactory().build("7", { suit: "Spades" }),
      ]);

      const trios = subject.getStraights();

      expect(trios).toEqual([]);
    });

    it("returns the existing straight", () => {
      const subject = new Cards([
        new CardFactory().build("A", { suit: "Hearts" }),
        new CardFactory().build("2", { suit: "Hearts" }),
        new CardFactory().build("3", { suit: "Hearts" }),
        new CardFactory().build("4", { suit: "Hearts" }),
        new CardFactory().build("10", { suit: "Hearts" }),
        new CardFactory().build("3", { suit: "Hearts" }),
        new CardFactory().build("8", { suit: "Hearts" }),
      ]);

      const straights = subject.getStraights();

      expect(straights).toEqual([
        new Cards([
          new CardFactory().build("A", { suit: "Hearts" }),
          new CardFactory().build("2", { suit: "Hearts" }),
          new CardFactory().build("3", { suit: "Hearts" }),
          new CardFactory().build("4", { suit: "Hearts" }),
        ]),
      ]);
    });

    it("returns multiple existing straights", () => {
      const subject = new Cards([
        new CardFactory().build("A", { suit: "Hearts" }),
        new CardFactory().build("2", { suit: "Hearts" }),
        new CardFactory().build("3", { suit: "Hearts" }),
        new CardFactory().build("4", { suit: "Hearts" }),
        new CardFactory().build("5", { suit: "Hearts" }),
        new CardFactory().build("3", { suit: "Hearts" }),
        new CardFactory().build("8", { suit: "Hearts" }),
      ]);

      const straights = subject.getStraights();

      expect(straights).toEqual([
        new Cards([
          new CardFactory().build("A", { suit: "Hearts" }),
          new CardFactory().build("2", { suit: "Hearts" }),
          new CardFactory().build("3", { suit: "Hearts" }),
          new CardFactory().build("4", { suit: "Hearts" }),
        ]),
        new Cards([
          new CardFactory().build("2", { suit: "Hearts" }),
          new CardFactory().build("3", { suit: "Hearts" }),
          new CardFactory().build("4", { suit: "Hearts" }),
          new CardFactory().build("5", { suit: "Hearts" }),
        ]),
      ]);
    });
    it("returns multiple existing straights even for multiple suits", () => {
      const subject = new Cards([
        new CardFactory().build("J", { suit: "Diamonds" }),
        new CardFactory().build("4", { suit: "Hearts" }),
        new CardFactory().build("A", { suit: "Hearts" }),
        new CardFactory().build("10", { suit: "Diamonds" }),
        new CardFactory().build("K", { suit: "Diamonds" }),
        new CardFactory().build("2", { suit: "Hearts" }),
        new CardFactory().build("Q", { suit: "Diamonds" }),
        new CardFactory().build("3", { suit: "Hearts" }),
        new CardFactory().build("9", { suit: "Clubs" }),
      ]);

      const straights = subject.getStraights();

      expect(straights).toHaveLength(2);
      expect(straights).toEqual(
        expect.arrayContaining([
          new Cards([
            new CardFactory().build("A", { suit: "Hearts" }),
            new CardFactory().build("2", { suit: "Hearts" }),
            new CardFactory().build("3", { suit: "Hearts" }),
            new CardFactory().build("4", { suit: "Hearts" }),
          ]),
          new Cards([
            new CardFactory().build("10", { suit: "Diamonds" }),
            new CardFactory().build("J", { suit: "Diamonds" }),
            new CardFactory().build("Q", { suit: "Diamonds" }),
            new CardFactory().build("K", { suit: "Diamonds" }),
          ]),
        ]),
      );
    });
  });
});
