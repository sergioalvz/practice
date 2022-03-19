import { Book } from "../Book";
import { Pack } from "./Pack";
import { max, times } from "lodash";
import { makePack } from "./index";

export class Packer {
  public pack(books: Book[]): Pack[] {
    if (books.length === 0) {
      return [];
    }

    const booksByTitle = books.reduce<Record<string, Book[]>>((groups, book) => {
      groups[book.getTitle()] = (groups[book.getTitle()] || []).concat(book);

      return groups;
    }, {});

    const numberOfPacks = max(Object.values(booksByTitle).map((copies) => copies.length));

    if (undefined === numberOfPacks) {
      throw new Error("numberOfPacks was not expected to be undefined");
    }

    const groups: Book[][] = times(numberOfPacks, () => []);

    for (const book of books) {
      let championIndex: number | null = null;

      for (let i = 0; i < groups.length; i++) {
        const group = groups[i];

        const canAdd = !group.some((b) => b.getTitle() === book.getTitle());

        if (canAdd) {
          if (championIndex === null) {
            championIndex = i;
          } else {
            const virtualChampion = [
              ...groups.slice(0, championIndex),
              groups[championIndex].concat(book),
              ...groups.slice(championIndex + 1),
            ];

            const virtualChampionSum = virtualChampion.map(makePack).reduce((sum, p) => sum + p.sum(), 0);

            const virtualCandidate = [...groups.slice(0, i), groups[i].concat(book), ...groups.slice(i + 1)];

            const virtualCandidateSum = virtualCandidate.map(makePack).reduce((sum, p) => sum + p.sum(), 0);

            if (virtualCandidateSum < virtualChampionSum) {
              championIndex = i;
            }
          }
        }
      }

      if (championIndex !== null) groups[championIndex].push(book);
    }

    return groups.map(makePack);
  }
}
