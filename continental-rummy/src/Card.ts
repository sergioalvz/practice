import { isEqual } from "lodash";
import { CardFactory } from "./CardFactory";

type Suit = "Hearts" | "Diamonds" | "Clubs" | "Spades" | "None";

export type CardOptions = {
  suit: Suit;
};

export abstract class Card {
  constructor(private _rank: string, protected options: CardOptions) {}

  public get rank(): string {
    return this._rank;
  }

  public get suit(): Suit {
    return this.options.suit;
  }

  public get index(): number {
    switch (this.rank) {
      case "2":
        return 2;
      case "3":
        return 3;
      case "4":
        return 4;
      case "5":
        return 5;
      case "6":
        return 6;
      case "7":
        return 7;
      case "8":
        return 8;
      case "9":
        return 9;
      case "10":
        return 10;
      case "J":
        return 11;
      case "Q":
        return 12;
      case "K":
        return 13;
      case "∞":
        return 14;
      default:
        throw new Error("Unkown rank");
    }
  }

  public get next(): Card {
    switch (this.rank) {
      case "2":
        return new CardFactory().build("3", this.options);
      case "3":
        return new CardFactory().build("4", this.options);
      case "4":
        return new CardFactory().build("5", this.options);
      case "5":
        return new CardFactory().build("6", this.options);
      case "6":
        return new CardFactory().build("7", this.options);
      case "7":
        return new CardFactory().build("8", this.options);
      case "8":
        return new CardFactory().build("9", this.options);
      case "9":
        return new CardFactory().build("10", this.options);
      case "10":
        return new CardFactory().build("J", this.options);
      case "J":
        return new CardFactory().build("Q", this.options);
      case "Q":
        return new CardFactory().build("K", this.options);
      case "K":
        return new CardFactory().build("A", this.options);
      case "∞":
        return new CardFactory().build("A", this.options);
      default:
        throw new Error("Unkown rank");
    }
  }

  public isValidNext(card: Card): boolean {
    return isEqual(card, this.next);
  }

  public getScore(): number {
    switch (this.rank) {
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        return 5;
      case "10":
      case "J":
      case "Q":
      case "K":
        return 10;
      case "∞":
        return 50;
      default:
        throw new Error("Unkown rank");
    }
  }
}
