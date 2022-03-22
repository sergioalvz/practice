import { Book } from "../Book";
import { Pack } from "./Pack";
import { max, times } from "lodash";
import { EmptyPack } from "./EmptyPack";

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

    const packs: Pack[] = times(numberOfPacks, () => new EmptyPack());

    const totalIfAddingTo = (index: number, book: Book): number => {
      return [...packs.slice(0, index), packs[index].add(book), ...packs.slice(index + 1)].reduce(
        (sum, p) => sum + p.sum(),
        0,
      );
    };

    for (const book of books) {
      let championIndex: number | null = null;

      for (let i = 0; i < packs.length; i++) {
        const pack = packs[i];

        if (pack.canAdd(book)) {
          if (championIndex === null) {
            championIndex = i;
            continue;
          }

          const championSum = totalIfAddingTo(championIndex, book);
          const candidateSum = totalIfAddingTo(i, book);

          if (candidateSum < championSum) {
            championIndex = i;
          }
        }
      }

      if (championIndex !== null) packs[championIndex] = packs[championIndex].add(book);
    }

    return packs;
  }
}
