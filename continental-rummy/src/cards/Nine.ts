import { Card, CardOptions } from "../Card";
import { CardFactory } from "../CardFactory";

export class Nine extends Card {
  constructor(options: CardOptions) {
    super("9", options);
  }

  public get index(): number {
    return 9;
  }

  public get next(): Card {
    return new CardFactory().build("10", this.options);
  }

  public getScore(): number {
    return 5;
  }
}
