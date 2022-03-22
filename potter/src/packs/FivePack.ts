import { Pack } from "./Pack";
import { Book } from "../Book";

export class FivePack extends Pack {
  constructor(books: Book[]) {
    super(books);
  }

  public add(book: Book): Pack {
    throw new Error("FivePack instances cannot add another element!");
  }

  protected discount(): number {
    return 25;
  }
}
