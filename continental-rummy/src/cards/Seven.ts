import { Card, CardOptions } from "../Card";
import { CardFactory } from "../CardFactory";

export class Seven extends Card {
  constructor(options: CardOptions) {
    super("7", options);
  }

  public get index(): number {
    return 7;
  }

  public get next(): Card {
    return new CardFactory().build("8", this.options);
  }

  public getScore(): number {
    return 5;
  }
}
