import { Card, CardOptions } from "../Card";
import { CardFactory } from "../CardFactory";

export class King extends Card {
  constructor(options: CardOptions) {
    super("K", options);
  }

  public get index(): number {
    return 13;
  }

  public get next(): Card {
    return new CardFactory().build("A", this.options);
  }

  public getScore(): number {
    return 10;
  }
}
