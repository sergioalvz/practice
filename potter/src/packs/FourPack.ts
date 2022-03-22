import { Pack } from "./Pack";
import { Book } from "../Book";
import { FivePack } from "./FivePack";

export class FourPack extends Pack {
  constructor(books: Book[]) {
    super(books);
  }

  public add(book: Book): Pack {
    return new FivePack(this.books.concat(book));
  }

  protected discount(): number {
    return 20;
  }
}
