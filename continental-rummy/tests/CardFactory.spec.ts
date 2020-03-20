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

describe("CardFactory", () => {
  describe("#build", () => {
    it("returns the right Card instance for Aces", () => {
      const subject = new CardFactory();

      const result = subject.build("A", { suit: "Hearts" });

      expect(result).toBeInstanceOf(Ace);
      expect(result.suit).toEqual("Hearts");
    });

    it("returns the right Card instance for Two", () => {
      const subject = new CardFactory();

      const result = subject.build("2", { suit: "Diamonds" });

      expect(result).toBeInstanceOf(Two);
      expect(result.suit).toEqual("Diamonds");
    });

    it("returns the right Card instance for Three", () => {
      const subject = new CardFactory();

      const result = subject.build("3", { suit: "Diamonds" });

      expect(result).toBeInstanceOf(Three);
      expect(result.suit).toEqual("Diamonds");
    });

    it("returns the right Card instance for Four", () => {
      const subject = new CardFactory();

      const result = subject.build("4", { suit: "Diamonds" });

      expect(result).toBeInstanceOf(Four);
      expect(result.suit).toEqual("Diamonds");
    });

    it("returns the right Card instance for Five", () => {
      const subject = new CardFactory();

      const result = subject.build("5", { suit: "Diamonds" });

      expect(result).toBeInstanceOf(Five);
      expect(result.suit).toEqual("Diamonds");
    });

    it("returns the right Card instance for Six", () => {
      const subject = new CardFactory();

      const result = subject.build("6", { suit: "Clubs" });

      expect(result).toBeInstanceOf(Six);
      expect(result.suit).toEqual("Clubs");
    });

    it("returns the right Card instance for Seven", () => {
      const subject = new CardFactory();

      const result = subject.build("7", { suit: "Clubs" });

      expect(result).toBeInstanceOf(Seven);
      expect(result.suit).toEqual("Clubs");
    });

    it("returns the right Card instance for Eight", () => {
      const subject = new CardFactory();

      const result = subject.build("8", { suit: "Clubs" });

      expect(result).toBeInstanceOf(Eight);
      expect(result.suit).toEqual("Clubs");
    });

    it("returns the right Card instance for Nine", () => {
      const subject = new CardFactory();

      const result = subject.build("9", { suit: "Clubs" });

      expect(result).toBeInstanceOf(Nine);
      expect(result.suit).toEqual("Clubs");
    });

    it("returns the right Card instance for Ten", () => {
      const subject = new CardFactory();

      const result = subject.build("10", { suit: "Clubs" });

      expect(result).toBeInstanceOf(Ten);
      expect(result.suit).toEqual("Clubs");
    });

    it("returns the right Card instance for Jack", () => {
      const subject = new CardFactory();

      const result = subject.build("J", { suit: "Spades" });

      expect(result).toBeInstanceOf(Jack);
      expect(result.suit).toEqual("Spades");
    });

    it("returns the right Card instance for Queen", () => {
      const subject = new CardFactory();

      const result = subject.build("Q", { suit: "Diamonds" });

      expect(result).toBeInstanceOf(Queen);
      expect(result.suit).toEqual("Diamonds");
    });

    it("returns the right Card instance for King", () => {
      const subject = new CardFactory();

      const result = subject.build("K", { suit: "Clubs" });

      expect(result).toBeInstanceOf(King);
      expect(result.suit).toEqual("Clubs");
    });

    it("returns the right Card instance for Joker", () => {
      const subject = new CardFactory();

      const result = subject.build("∞", { suit: "None" });

      expect(result).toBeInstanceOf(Joker);
      expect(result.suit).toEqual("None");
    });

    it("throws an exception for unknown cards", () => {
      const subject = new CardFactory();

      expect(() => subject.build("WUT", { suit: "None" })).toThrowError(/Invalid card/);
    });
  });
});
