import { Card, CardOptions } from "../Card";
import { CardFactory } from "../CardFactory";

export class Queen extends Card {
  constructor(options: CardOptions) {
    super("Q", options);
  }

  public get index(): number {
    return 12;
  }

  public get next(): Card {
    return new CardFactory().build("K", this.options);
  }

  public getScore(): number {
    return 10;
  }
}
