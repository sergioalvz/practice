import { transformer } from '../../../../src/plugins/transformers/buzz';

describe('transformer', () => {
  it('ignores other numbers than multiples of 5', () => {
    expect(transformer('2')).toEqual('2');
  });

  it('transforms multiples of 5 to "Fizz"', () => {
    expect(transformer('10')).toEqual('Buzz');
  });

  it('ignores already transformed values', () => {
    expect(transformer('Whatever')).toEqual('Whatever');
  });
});
