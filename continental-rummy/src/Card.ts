import { isEqual } from "lodash";

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

  public isValidNext(card: Card): boolean {
    return isEqual(card, this.next);
  }

  public abstract get index(): number;

  public abstract get next(): Card;

  public abstract getScore(): number;
}
