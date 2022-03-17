import { Pack } from "./Pack";
import { Book } from "../Book";

export class ThreePack extends Pack {
  constructor(books: Book[]) {
    super(books);
  }

  protected discount(): number {
    return 10;
  }
}
