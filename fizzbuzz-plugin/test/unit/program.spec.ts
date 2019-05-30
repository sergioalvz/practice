import { program } from '../../src/program';
describe('program', () => {
  it('executes correctly', async () => {
    const reporter = jest.fn();
    const transformer = (_: string) => 'Fake';

    await program({
      numberOfElements: 3,
      plugins: {
        reporters: [reporter],
        transformers: [transformer],
      },
    });

    expect(reporter).toHaveBeenCalledWith(['Fake', 'Fake', 'Fake']);
  });

  it('works with no transformers', async () => {
    const reporter = jest.fn();

    await program({
      numberOfElements: 3,
      plugins: {
        reporters: [reporter],
        transformers: [],
      },
    });

    expect(reporter).toHaveBeenCalledWith(['1', '2', '3']);
  });

  it('supports multiple reporters', async () => {
    expect.assertions(2);

    const reporter = jest.fn(() => Promise.resolve(null));
    const anotherReporter = jest.fn(() => Promise.resolve(null));

    await program({
      numberOfElements: 3,
      plugins: {
        reporters: [reporter, anotherReporter],
        transformers: [],
      },
    });

    expect(reporter).toHaveBeenCalledWith(['1', '2', '3']);
    expect(anotherReporter).toHaveBeenCalledWith(['1', '2', '3']);
  });
});
