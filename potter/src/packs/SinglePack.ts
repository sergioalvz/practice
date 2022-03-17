import { Pack } from "./Pack";
import { Book } from "../Book";

export class SinglePack extends Pack {
  constructor(books: Book[]) {
    super(books);
  }

  protected discount(): number {
    return 0;
  }
}
