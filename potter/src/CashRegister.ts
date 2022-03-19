import { Book } from "./Book";
import { Packer } from "./packs/Packer";

export class CashRegister {
  public calculate(books: Book[]): number {
    const packs = new Packer().pack(books);

    return packs.reduce((sum, pack) => sum + pack.sum(), 0);
  }
}
