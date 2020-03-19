import { Card, CardOptions } from "../Card";
import { CardFactory } from "../CardFactory";

export class Jack extends Card {
  constructor(options: CardOptions) {
    super("J", options);
  }

  public get index(): number {
    return 11;
  }

  public get next(): Card {
    return new CardFactory().build("Q", this.options);
  }

  public getScore(): number {
    return 10;
  }
}
