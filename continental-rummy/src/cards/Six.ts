import { Card, CardOptions } from "../Card";
import { CardFactory } from "../CardFactory";

export class Six extends Card {
  constructor(options: CardOptions) {
    super("6", options);
  }

  public get index(): number {
    return 6;
  }

  public get next(): Card {
    return new CardFactory().build("7", this.options);
  }

  public getScore(): number {
    return 5;
  }
}
