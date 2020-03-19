import { Card, CardOptions } from "../Card";
import { CardFactory } from "../CardFactory";

export class Ace extends Card {
  constructor(options: CardOptions) {
    super("A", options);
  }

  public getScore() {
    return 20;
  }

  public get next() {
    return new CardFactory().build("2", this.options);
  }

  public get index() {
    return 1;
  }
}
