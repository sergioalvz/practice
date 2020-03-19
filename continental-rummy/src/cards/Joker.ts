import { Card, CardOptions } from "../Card";
import { CardFactory } from "../CardFactory";

export class Joker extends Card {
  constructor(options: CardOptions) {
    super("∞", options);
  }

  public get index(): number {
    return 14;
  }

  public get next(): Card {
    return new CardFactory().build("A", this.options);
  }

  public getScore(): number {
    return 50;
  }
}
