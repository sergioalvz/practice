import { Card, CardOptions } from "../Card";
import { CardFactory } from "../CardFactory";

export class Three extends Card {
  constructor(options: CardOptions) {
    super("3", options);
  }

  public get index(): number {
    return 3;
  }

  public get next(): Card {
    return new CardFactory().build("4", this.options);
  }

  public getScore(): number {
    return 5;
  }
}
