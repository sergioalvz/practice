import { Pack } from "./Pack";
import { Book } from "../Book";

export class FivePack extends Pack {
  constructor(books: Book[]) {
    super(books);
  }

  protected discount(): number {
    return 25;
  }
}
