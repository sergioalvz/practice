import { Pack } from "./Pack";
import { Book } from "../Book";
import { ThreePack } from "./ThreePack";

export class TwoPack extends Pack {
  constructor(books: Book[]) {
    super(books);
  }

  public add(book: Book): Pack {
    return new ThreePack(this.books.concat(book));
  }

  protected discount(): number {
    return 5;
  }
}
