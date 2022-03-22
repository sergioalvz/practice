import { Pack } from "./Pack";
import { SinglePack } from "./SinglePack";
import { Book } from "../Book";

export class EmptyPack extends Pack {
  constructor() {
    super([]);
  }

  add(book: Book): Pack {
    return new SinglePack([book]);
  }

  protected discount(): number {
    return 0;
  }
}
