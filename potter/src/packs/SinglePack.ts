import { Pack } from "./Pack";
import { Book } from "../Book";
import { TwoPack } from "./TwoPack";

export class SinglePack extends Pack {
  constructor(books: Book[]) {
    super(books);
  }

  public add(book: Book): Pack {
    return new TwoPack(this.books.concat(book));
  }

  protected discount(): number {
    return 0;
  }
}
