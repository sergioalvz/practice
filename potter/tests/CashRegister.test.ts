import { Book } from "../src/Book";
import { CashRegister } from "../src/CashRegister";
import { applyDiscount } from "../src/math";

describe("CashRegister", function () {
  const SINGLE_BOOK_PRICE = 8;

  let subject: CashRegister;

  beforeEach(() => {
    subject = new CashRegister();
  });

  it("calculates the price for a single book", function () {
    expect(subject.calculate([new Book("1", SINGLE_BOOK_PRICE)])).toEqual(SINGLE_BOOK_PRICE);
  });

  it("calculates the price for multiple copies of the same book", function () {
    expect(
      subject.calculate([
        new Book("1", SINGLE_BOOK_PRICE),
        new Book("1", SINGLE_BOOK_PRICE),
        new Book("1", SINGLE_BOOK_PRICE),
      ]),
    ).toEqual(SINGLE_BOOK_PRICE * 3);
  });

  it("applies a 5% discount if buying two different books", function () {
    expect(subject.calculate([new Book("1", SINGLE_BOOK_PRICE), new Book("2", SINGLE_BOOK_PRICE)])).toEqual(
      applyDiscount(SINGLE_BOOK_PRICE * 2, 5),
    );
  });

  it("applies a 10% discount if buying 3 different books", function () {
    expect(
      subject.calculate([
        new Book("1", SINGLE_BOOK_PRICE),
        new Book("2", SINGLE_BOOK_PRICE),
        new Book("3", SINGLE_BOOK_PRICE),
      ]),
    ).toEqual(applyDiscount(SINGLE_BOOK_PRICE * 3, 10));
  });

  it("applies a 20% discount if buying 4 different books", function () {
    expect(
      subject.calculate([
        new Book("1", SINGLE_BOOK_PRICE),
        new Book("2", SINGLE_BOOK_PRICE),
        new Book("3", SINGLE_BOOK_PRICE),
        new Book("4", SINGLE_BOOK_PRICE),
      ]),
    ).toEqual(applyDiscount(SINGLE_BOOK_PRICE * 4, 20));
  });

  it("applies a 25% discount if buying 5 different books", function () {
    expect(
      subject.calculate([
        new Book("1", SINGLE_BOOK_PRICE),
        new Book("2", SINGLE_BOOK_PRICE),
        new Book("3", SINGLE_BOOK_PRICE),
        new Book("4", SINGLE_BOOK_PRICE),
        new Book("5", SINGLE_BOOK_PRICE),
      ]),
    ).toEqual(applyDiscount(SINGLE_BOOK_PRICE * 5, 25));
  });

  it("applies multiple discounts at once", function () {
    expect(
      subject.calculate([
        new Book("1", SINGLE_BOOK_PRICE),
        new Book("2", SINGLE_BOOK_PRICE),
        new Book("3", SINGLE_BOOK_PRICE),

        new Book("1", SINGLE_BOOK_PRICE),
        new Book("2", SINGLE_BOOK_PRICE),

        new Book("1", SINGLE_BOOK_PRICE),
        new Book("2", SINGLE_BOOK_PRICE),

        new Book("1", SINGLE_BOOK_PRICE),
      ]),
    ).toEqual(
      applyDiscount(SINGLE_BOOK_PRICE * 3, 10) +
        applyDiscount(SINGLE_BOOK_PRICE * 2, 5) +
        applyDiscount(SINGLE_BOOK_PRICE * 2, 5) +
        SINGLE_BOOK_PRICE,
    );
  });
});
