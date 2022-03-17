import { Book } from "./Book";
import { compact, zip } from "lodash";
import { makePack } from "./packs";

export class CashRegister {
  public calculate(books: Book[]): number {
    const booksByTitle = books.reduce<Record<string, Book[]>>((groups, book) => {
      groups[book.getTitle()] = (groups[book.getTitle()] || []).concat(book);

      return groups;
    }, {});

    return zip(...Object.values(booksByTitle))
      .map(compact)
      .reduce((sum, group) => sum + makePack(group).sum(), 0);
  }
}
