import { Settings } from "./Settings";

type Hand = {
  trios: number;
  straights: number;
};

export class Game {
  public getNumberOfCardsToDeal({ straights, trios }: Hand): number {
    if (straights < 0 || trios < 0) {
      throw new Error("Invalid hand");
    }

    return straights * Settings.NUMBER_OF_CARDS_FOR_STRAIGHT + trios * Settings.NUMBER_OF_CARDS_FOR_TRIO + 1;
  }
}
