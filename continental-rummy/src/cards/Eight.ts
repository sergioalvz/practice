import { Card, CardOptions } from "../Card";
import { CardFactory } from "../CardFactory";

export class Eight extends Card {
  constructor(options: CardOptions) {
    super("8", options);
  }

  public get index(): number {
    return 8;
  }

  public get next(): Card {
    return new CardFactory().build("9", this.options);
  }

  public getScore(): number {
    return 5;
  }
}
