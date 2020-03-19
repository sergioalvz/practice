import { Card, CardOptions } from "../Card";

export class Joker extends Card {
  constructor(options: CardOptions) {
    super("∞", options);
  }
}
