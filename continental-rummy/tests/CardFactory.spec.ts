import { CardFactory } from "../src/CardFactory";
import { Ace } from "../src/cards/Ace";
import { Two } from "../src/cards/Two";
import { Three } from "../src/cards/Three";
import { Four } from "../src/cards/Four";
import { Five } from "../src/cards/Five";
import { Six } from "../src/cards/Six";
import { Seven } from "../src/cards/Seven";
import { Eight } from "../src/cards/Eight";
import { Nine } from "../src/cards/Nine";
import { Ten } from "../src/cards/Ten";
import { Jack } from "../src/cards/Jack";
import { Queen } from "../src/cards/Queen";
import { King } from "../src/cards/King";
import { Joker } from "../src/cards/Joker";
import { CardOptions } from "../src/Card";

function testCardFactory({ rank, options, type }: { rank: string; options: CardOptions; type: any }) {
  it(`returns ${type.name} for "${rank}"`, () => {
    const subject = new CardFactory();

    const result = subject.build(rank, options);

    expect(result).toBeInstanceOf(type);
    expect(result.suit).toEqual(options.suit);
  });
}

describe("CardFactory", () => {
  describe("#build", () => {
    testCardFactory({ rank: "A", options: { suit: "Hearts" }, type: Ace });
    testCardFactory({ rank: "2", options: { suit: "Diamonds" }, type: Two });
    testCardFactory({ rank: "3", options: { suit: "Diamonds" }, type: Three });
    testCardFactory({ rank: "4", options: { suit: "Diamonds" }, type: Four });
    testCardFactory({ rank: "5", options: { suit: "Diamonds" }, type: Five });
    testCardFactory({ rank: "6", options: { suit: "Diamonds" }, type: Six });
    testCardFactory({ rank: "7", options: { suit: "Clubs" }, type: Seven });
    testCardFactory({ rank: "8", options: { suit: "Clubs" }, type: Eight });
    testCardFactory({ rank: "9", options: { suit: "Clubs" }, type: Nine });
    testCardFactory({ rank: "10", options: { suit: "Clubs" }, type: Ten });
    testCardFactory({ rank: "J", options: { suit: "Spades" }, type: Jack });
    testCardFactory({ rank: "Q", options: { suit: "Diamonds" }, type: Queen });
    testCardFactory({ rank: "K", options: { suit: "Clubs" }, type: King });
    testCardFactory({ rank: "∞", options: { suit: "None" }, type: Joker });

    it("throws an exception for unknown cards", () => {
      const subject = new CardFactory();

      expect(() => subject.build("WUT", { suit: "None" })).toThrowError(/Invalid card/);
    });
  });
});
