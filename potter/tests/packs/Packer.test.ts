import { Book } from "../../src/Book";
import { SinglePack } from "../../src/packs/SinglePack";
import { TwoPack } from "../../src/packs/TwoPack";
import { ThreePack } from "../../src/packs/ThreePack";
import { FourPack } from "../../src/packs/FourPack";
import { FivePack } from "../../src/packs/FivePack";
import { Packer } from "../../src/packs/Packer";

describe("Packer", function () {
  describe("#pack", function () {
    it("returns an empty collection of packs if there are no books", function () {
      const subject = new Packer();

      expect(subject.pack([])).toEqual([]);
    });

    it("returns SinglePack instances if there are only copies of the same book", function () {
      const subject = new Packer();

      expect(subject.pack([new Book("1", 8), new Book("1", 8)])).toEqual([
        expect.any(SinglePack),
        expect.any(SinglePack),
      ]);
    });

    it("returns a TwoPack if there are two different books", function () {
      const subject = new Packer();

      expect(subject.pack([new Book("1", 8), new Book("2", 8)])).toEqual([expect.any(TwoPack)]);
    });

    it("returns a ThreePack if there are three different books", function () {
      const subject = new Packer();

      expect(subject.pack([new Book("1", 8), new Book("2", 8), new Book("3", 8)])).toEqual([expect.any(ThreePack)]);
    });

    it("returns a FourPack if there are four different books", function () {
      const subject = new Packer();

      expect(subject.pack([new Book("1", 8), new Book("2", 8), new Book("3", 8), new Book("4", 8)])).toEqual([
        expect.any(FourPack),
      ]);
    });

    it("returns a FivePack if there are five different books", function () {
      const subject = new Packer();

      expect(
        subject.pack([new Book("1", 8), new Book("2", 8), new Book("3", 8), new Book("4", 8), new Book("5", 8)]),
      ).toEqual([expect.any(FivePack)]);
    });

    it("creates multiple packs", function () {
      const subject = new Packer();

      expect(
        subject.pack([new Book("1", 8), new Book("2", 8), new Book("1", 8), new Book("2", 8), new Book("3", 8)]),
      ).toIncludeSameMembers([expect.any(TwoPack), expect.any(ThreePack)]);
    });

    it("creates the most optimal packs", function () {
      const subject = new Packer();

      expect(
        subject.pack([
          new Book("1", 8),
          new Book("1", 8),
          new Book("1", 8),
          new Book("1", 8),
          new Book("2", 8),
          new Book("2", 8),
          new Book("2", 8),
          new Book("3", 8),
        ]),
      ).toIncludeSameMembers([expect.any(ThreePack), expect.any(TwoPack), expect.any(TwoPack), expect.any(SinglePack)]);

      expect(
        subject.pack([
          new Book("1", 8),
          new Book("1", 8),
          new Book("2", 8),
          new Book("2", 8),
          new Book("3", 8),
          new Book("3", 8),
          new Book("4", 8),
          new Book("5", 8),
        ]),
      ).toIncludeSameMembers([expect.any(FourPack), expect.any(FourPack)]);
    });
  });
});
