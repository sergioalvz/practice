import { Card, CardOptions } from "../Card";
import { CardFactory } from "../CardFactory";

export class Ten extends Card {
  constructor(options: CardOptions) {
    super("10", options);
  }

  public get index(): number {
    return 10;
  }

  public get next(): Card {
    return new CardFactory().build("J", this.options);
  }

  public getScore(): number {
    return 10;
  }
}
