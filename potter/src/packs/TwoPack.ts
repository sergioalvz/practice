import { Pack } from "./Pack";
import { Book } from "../Book";

export class TwoPack extends Pack {
  constructor(books: Book[]) {
    super(books);
  }

  protected discount(): number {
    return 5;
  }
}
