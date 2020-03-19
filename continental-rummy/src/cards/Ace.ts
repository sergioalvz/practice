import { Card, CardOptions } from "../Card";

export class Ace extends Card {
  constructor(options: CardOptions) {
    super("A", options);
  }

  public getScore() {
    return 20;
  }

  public get next() {
    return new Card("2", this.options);
  }

  public get index() {
    return 1;
  }
}
