export class Book {
  constructor(private title: string, private price: number) {}

  public getPrice(): number {
    return this.price;
  }

  public getTitle(): string {
    return this.title;
  }
}
