export class Book {
  constructor(private title: string, private price: number) {}

  public equals(book: Book): boolean {
    return book.getTitle() === this.title;
  }

  public getPrice(): number {
    return this.price;
  }

  public getTitle(): string {
    return this.title;
  }
}
