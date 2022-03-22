import { Book } from "../Book";
import { applyDiscount } from "../math";

export abstract class Pack {
  protected constructor(protected books: Book[]) {}

  public abstract add(book: Book): Pack;

  protected abstract discount(): number;

  public canAdd(book: Book) {
    return !this.books.some((b) => b.equals(book));
  }

  public sum(): number {
    const total = this.books.reduce((sum, book) => sum + book.getPrice(), 0);

    return applyDiscount(total, this.discount());
  }
}
