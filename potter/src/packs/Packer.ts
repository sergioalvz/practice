import { Book } from "../Book";
import { Pack } from "./Pack";
import { max, times } from "lodash";
import { EmptyPack } from "./EmptyPack";

function simulate(packs: Pack[], options: { at: number }) {
  return {
    with: (book: Book) => {
      return {
        sum: (): number => {
          const simulation = [
            ...packs.slice(0, options.at),
            packs[options.at].add(book),
            ...packs.slice(options.at + 1),
          ];

          return simulation.reduce((sum, p) => sum + p.sum(), 0);
        },
      };
    },
  };
}

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

    for (const book of books) {
      let mostOptimalPackIndex: number | null = null;

      for (let index = 0; index < packs.length; index++) {
        const pack = packs[index];

        if (!pack.canAdd(book)) {
          continue;
        }

        if (mostOptimalPackIndex === null) {
          mostOptimalPackIndex = index;
          continue;
        }

        const mostOptimalPackSum = simulate(packs, { at: mostOptimalPackIndex }).with(book).sum();
        const candidatePackSum = simulate(packs, { at: index }).with(book).sum();

        if (candidatePackSum < mostOptimalPackSum) {
          mostOptimalPackIndex = index;
        }
      }

      if (mostOptimalPackIndex !== null) {
        packs[mostOptimalPackIndex] = packs[mostOptimalPackIndex].add(book);
      }
    }

    return packs;
  }
}
