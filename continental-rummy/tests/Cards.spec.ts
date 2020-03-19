import { Cards } from "../src/Cards";
import { Card } from "../src/Card";

describe("Cards", () => {
  describe("#getScore", () => {
    it("returns 0 if there are no cards", async () => {
      const subject = new Cards([]);

      const score = subject.getScore();

      expect(score).toBe(0);
    });

    it("returns 5 points for each 2-9 card", () => {
      const subject = new Cards([
        new Card("2", { suit: "Hearts" }),
        new Card("3", { suit: "Hearts" }),
        new Card("4", { suit: "Hearts" }),
        new Card("5", { suit: "Hearts" }),
        new Card("6", { suit: "Hearts" }),
        new Card("7", { suit: "Hearts" }),
        new Card("8", { suit: "Hearts" }),
        new Card("9", { suit: "Hearts" }),
      ]);

      const score = subject.getScore();

      expect(score).toBe(40);
    });

    it("returns 10 points for each 10 and face card", () => {
      const subject = new Cards([
        new Card("10", { suit: "Hearts" }),
        new Card("J", { suit: "Hearts" }),
        new Card("Q", { suit: "Hearts" }),
        new Card("K", { suit: "Hearts" }),
      ]);

      const score = subject.getScore();

      expect(score).toBe(40);
    });

    it("returns 20 for each ace", () => {
      const subject = new Cards([new Card("A", { suit: "Hearts" })]);

      const score = subject.getScore();

      expect(score).toBe(20);
    });

    it("returns 50 for each Jokers", () => {
      const subject = new Cards([new Card("∞", { suit: "None" })]);

      const score = subject.getScore();

      expect(score).toBe(50);
    });

    it("returns the right score if there are multiple mixed ranks", () => {
      const subject = new Cards([
        new Card("∞", { suit: "Hearts" }),
        new Card("2", { suit: "Hearts" }),
        new Card("Q", { suit: "Hearts" }),
        new Card("Q", { suit: "Hearts" }),
        new Card("Q", { suit: "Hearts" }),
        new Card("2", { suit: "Hearts" }),
        new Card("A", { suit: "Hearts" }),
      ]);

      const score = subject.getScore();

      expect(score).toBe(110);
    });
  });

  describe("#getTrios", () => {
    it("returns no trios if there aren't any", () => {
      const subject = new Cards([
        new Card("∞", { suit: "Hearts" }),
        new Card("2", { suit: "Hearts" }),
        new Card("Q", { suit: "Hearts" }),
        new Card("K", { suit: "Hearts" }),
        new Card("J", { suit: "Hearts" }),
        new Card("3", { suit: "Hearts" }),
        new Card("A", { suit: "Hearts" }),
      ]);

      const trios = subject.getTrios();

      expect(trios).toEqual([]);
    });

    it("returns the existing trio", () => {
      const subject = new Cards([
        new Card("∞", { suit: "Hearts" }),
        new Card("2", { suit: "Hearts" }),
        new Card("2", { suit: "Hearts" }),
        new Card("2", { suit: "Hearts" }),
        new Card("J", { suit: "Hearts" }),
        new Card("3", { suit: "Hearts" }),
        new Card("A", { suit: "Hearts" }),
      ]);

      const trios = subject.getTrios();

      expect(trios).toEqual([
        new Cards([
          new Card("2", { suit: "Hearts" }),
          new Card("2", { suit: "Hearts" }),
          new Card("2", { suit: "Hearts" }),
        ]),
      ]);
    });

    it("returns multiples existing trios", () => {
      const subject = new Cards([
        new Card("∞", { suit: "Hearts" }),
        new Card("2", { suit: "Hearts" }),
        new Card("2", { suit: "Hearts" }),
        new Card("2", { suit: "Hearts" }),
        new Card("2", { suit: "Hearts" }),
        new Card("2", { suit: "Hearts" }),
        new Card("2", { suit: "Hearts" }),
      ]);

      const trios = subject.getTrios();

      expect(trios).toEqual([
        new Cards([
          new Card("2", { suit: "Hearts" }),
          new Card("2", { suit: "Hearts" }),
          new Card("2", { suit: "Hearts" }),
        ]),
        new Cards([
          new Card("2", { suit: "Hearts" }),
          new Card("2", { suit: "Hearts" }),
          new Card("2", { suit: "Hearts" }),
        ]),
      ]);
    });
  });

  describe("#getStraights", () => {
    it("returns no straights if there are not any", () => {
      const subject = new Cards([
        new Card("A", { suit: "Hearts" }),
        new Card("2", { suit: "Diamonds" }),
        new Card("3", { suit: "Clubs" }),
        new Card("4", { suit: "Clubs" }),
        new Card("5", { suit: "Spades" }),
        new Card("6", { suit: "Hearts" }),
        new Card("7", { suit: "Spades" }),
      ]);

      const trios = subject.getStraights();

      expect(trios).toEqual([]);
    });

    it("returns the existing straight", () => {
      const subject = new Cards([
        new Card("A", { suit: "Hearts" }),
        new Card("2", { suit: "Hearts" }),
        new Card("3", { suit: "Hearts" }),
        new Card("4", { suit: "Hearts" }),
        new Card("10", { suit: "Hearts" }),
        new Card("3", { suit: "Hearts" }),
        new Card("8", { suit: "Hearts" }),
      ]);

      const straights = subject.getStraights();

      expect(straights).toEqual([
        new Cards([
          new Card("A", { suit: "Hearts" }),
          new Card("2", { suit: "Hearts" }),
          new Card("3", { suit: "Hearts" }),
          new Card("4", { suit: "Hearts" }),
        ]),
      ]);
    });

    it("returns multiple existing straights", () => {
      const subject = new Cards([
        new Card("A", { suit: "Hearts" }),
        new Card("2", { suit: "Hearts" }),
        new Card("3", { suit: "Hearts" }),
        new Card("4", { suit: "Hearts" }),
        new Card("5", { suit: "Hearts" }),
        new Card("3", { suit: "Hearts" }),
        new Card("8", { suit: "Hearts" }),
      ]);

      const straights = subject.getStraights();

      expect(straights).toEqual([
        new Cards([
          new Card("A", { suit: "Hearts" }),
          new Card("2", { suit: "Hearts" }),
          new Card("3", { suit: "Hearts" }),
          new Card("4", { suit: "Hearts" }),
        ]),
        new Cards([
          new Card("2", { suit: "Hearts" }),
          new Card("3", { suit: "Hearts" }),
          new Card("4", { suit: "Hearts" }),
          new Card("5", { suit: "Hearts" }),
        ]),
      ]);
    });
    it("returns multiple existing straights even for multiple suits", () => {
      const subject = new Cards([
        new Card("J", { suit: "Diamonds" }),
        new Card("4", { suit: "Hearts" }),
        new Card("A", { suit: "Hearts" }),
        new Card("10", { suit: "Diamonds" }),
        new Card("K", { suit: "Diamonds" }),
        new Card("2", { suit: "Hearts" }),
        new Card("Q", { suit: "Diamonds" }),
        new Card("3", { suit: "Hearts" }),
        new Card("9", { suit: "Clubs" }),
      ]);

      const straights = subject.getStraights();

      expect(straights).toHaveLength(2);
      expect(straights).toEqual(
        expect.arrayContaining([
          new Cards([
            new Card("A", { suit: "Hearts" }),
            new Card("2", { suit: "Hearts" }),
            new Card("3", { suit: "Hearts" }),
            new Card("4", { suit: "Hearts" }),
          ]),
          new Cards([
            new Card("10", { suit: "Diamonds" }),
            new Card("J", { suit: "Diamonds" }),
            new Card("Q", { suit: "Diamonds" }),
            new Card("K", { suit: "Diamonds" }),
          ]),
        ]),
      );
    });
  });
});
