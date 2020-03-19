import { Card, CardOptions } from "../Card";
import { CardFactory } from "../CardFactory";

export class Four extends Card {
  constructor(options: CardOptions) {
    super("4", options);
  }

  public get index(): number {
    return 4;
  }

  public get next(): Card {
    return new CardFactory().build("5", this.options);
  }

  public getScore(): number {
    return 5;
  }
}
