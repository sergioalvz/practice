import { Book } from "../Book";
import { applyDiscount } from "../math";

export abstract class Pack {
  protected constructor(private books: Book[]) {}

  protected abstract discount(): number;

  public sum(): number {
    const total = this.books.reduce((sum, book) => sum + book.getPrice(), 0);

    return applyDiscount(total, this.discount());
  }
}
