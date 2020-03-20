import { Card, CardOptions } from "./Card";
import { Ace } from "./cards/Ace";
import { Eight } from "./cards/Eight";
import { Five } from "./cards/Five";
import { Four } from "./cards/Four";
import { Jack } from "./cards/Jack";
import { Joker } from "./cards/Joker";
import { King } from "./cards/King";
import { Nine } from "./cards/Nine";
import { Queen } from "./cards/Queen";
import { Seven } from "./cards/Seven";
import { Six } from "./cards/Six";
import { Ten } from "./cards/Ten";
import { Three } from "./cards/Three";
import { Two } from "./cards/Two";

export class CardFactory {
  public build(rank: string, options: CardOptions): Card {
    switch (rank) {
      case "A":
        return new Ace(options);
      case "2":
        return new Two(options);
      case "3":
        return new Three(options);
      case "4":
        return new Four(options);
      case "5":
        return new Five(options);
      case "6":
        return new Six(options);
      case "7":
        return new Seven(options);
      case "8":
        return new Eight(options);
      case "9":
        return new Nine(options);
      case "10":
        return new Ten(options);
      case "J":
        return new Jack(options);
      case "Q":
        return new Queen(options);
      case "K":
        return new King(options);
      case "∞":
        return new Joker(options);
      default:
        throw new Error("Invalid card");
    }
  }
}
