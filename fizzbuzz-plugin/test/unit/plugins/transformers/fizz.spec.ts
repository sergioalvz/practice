import { transformer } from '../../../../src/plugins/transformers/fizz';

describe('transformer', () => {
  it('ignores other numbers than multiples of 3', () => {
    expect(transformer('2')).toEqual('2');
  });

  it('transforms multiples of 3 to "Fizz"', () => {
    expect(transformer('9')).toEqual('Fizz');
  });

  it('ignores already transformed values', () => {
    expect(transformer('Whatever')).toEqual('Whatever');
  });
});
