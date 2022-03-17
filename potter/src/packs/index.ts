import { Pack } from "./Pack";
import { Book } from "../Book";
import { SinglePack } from "./SinglePack";
import { TwoPack } from "./TwoPack";
import { ThreePack } from "./ThreePack";
import { FourPack } from "./FourPack";
import { FivePack } from "./FivePack";

export function makePack(books: Book[]): Pack {
  switch (books.length) {
    case 5:
      return new FivePack(books);
    case 4:
      return new FourPack(books);
    case 3:
      return new ThreePack(books);
    case 2:
      return new TwoPack(books);
    default:
      return new SinglePack(books);
  }
}
