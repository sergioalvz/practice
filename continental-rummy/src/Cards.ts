import { chunk, flatten, groupBy, sortBy, uniqBy, isEqual } from "lodash";
import { Card } from "./Card";
import { Settings } from "./Settings";

export class Cards {
  constructor(private cards: Card[]) {}

  public getScore(): number {
    return this.cards.map((card) => card.getScore()).reduce((acc, score) => acc + score, 0);
  }

  public getTrios() {
    const groupsOfTrios = Object.values(groupBy(this.cards, "rank")).map((cards) =>
      chunk(cards, Settings.NUMBER_OF_CARDS_FOR_TRIO),
    );

    return flatten(groupsOfTrios)
      .filter((cards) => cards.length === Settings.NUMBER_OF_CARDS_FOR_TRIO) // some of them could contain less than required
      .map((cards) => new Cards(cards));
  }

  public getStraights() {
    const straights: Cards[] = [];

    const groupsBySuit = Object.values(groupBy(this.cards, "suit")).map((cards) =>
      uniqBy(sortBy(cards, "index"), "rank"),
    );

    groupsBySuit.forEach((cards) => {
      cards.forEach((_, index) => {
        const followingCards = cards.slice(index, index + 4);
        const mapWithValidNext = followingCards.map((card, idx, col) => card.isValidNext(col[idx + 1]));

        if (isEqual(mapWithValidNext, [true, true, true, false])) {
          straights.push(new Cards(followingCards));
        }
      });
    });

    return straights;
  }
}
