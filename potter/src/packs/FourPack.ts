import { Pack } from "./Pack";
import { Book } from "../Book";

export class FourPack extends Pack {
  constructor(books: Book[]) {
    super(books);
  }

  protected discount(): number {
    return 20;
  }
}
