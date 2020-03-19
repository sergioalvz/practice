import { isEqual } from "lodash";

type Suit = "Hearts" | "Diamonds" | "Clubs" | "Spades" | "None";

type CardOptions = {
  suit: Suit;
};

export class Card {
  constructor(private _rank: string, private options: CardOptions) {}

  public get rank(): string {
    return this._rank;
  }

  public get suit(): Suit {
    return this.options.suit;
  }

  public get index(): number {
    switch (this.rank) {
      case "A":
        return 1;
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
      case "A":
        return new Card("2", this.options);
      case "2":
        return new Card("3", this.options);
      case "3":
        return new Card("4", this.options);
      case "4":
        return new Card("5", this.options);
      case "5":
        return new Card("6", this.options);
      case "6":
        return new Card("7", this.options);
      case "7":
        return new Card("8", this.options);
      case "8":
        return new Card("9", this.options);
      case "9":
        return new Card("10", this.options);
      case "10":
        return new Card("J", this.options);
      case "J":
        return new Card("Q", this.options);
      case "Q":
        return new Card("K", this.options);
      case "K":
        return new Card("A", this.options);
      case "∞":
        return new Card("A", this.options);
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
      case "A":
        return 20;
      case "∞":
        return 50;
      default:
        throw new Error("Unkown rank");
    }
  }
}
