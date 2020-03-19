import { Card, CardOptions } from "../Card";
import { CardFactory } from "../CardFactory";

export class Two extends Card {
  constructor(options: CardOptions) {
    super("2", options);
  }

  public get index(): number {
    return 2;
  }

  public get next(): Card {
    return new CardFactory().build("3", this.options);
  }

  public getScore(): number {
    return 5;
  }
}
