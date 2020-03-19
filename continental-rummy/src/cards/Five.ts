import { Card, CardOptions } from "../Card";
import { CardFactory } from "../CardFactory";

export class Five extends Card {
  constructor(options: CardOptions) {
    super("5", options);
  }

  public get index(): number {
    return 5;
  }

  public get next(): Card {
    return new CardFactory().build("6", this.options);
  }

  public getScore(): number {
    return 5;
  }
}
