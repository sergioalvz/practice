import { Pack } from "./Pack";
import { Book } from "../Book";
import { FourPack } from "./FourPack";

export class ThreePack extends Pack {
  constructor(books: Book[]) {
    super(books);
  }

  public add(book: Book): Pack {
    return new FourPack(this.books.concat(book));
  }

  protected discount(): number {
    return 10;
  }
}
