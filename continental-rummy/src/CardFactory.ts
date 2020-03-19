import { CardOptions, Card } from "./Card";
import { Ace } from "./cards/Ace";

export class CardFactory {
  public build(_: string, __: CardOptions): Card {
    return new Ace({ suit: "Hearts" });
  }
}
