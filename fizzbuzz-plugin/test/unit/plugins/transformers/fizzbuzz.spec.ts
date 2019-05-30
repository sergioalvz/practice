import { transformer } from '../../../../src/plugins/transformers/fizzbuzz';

describe('transformer', () => {
  it('ignores numbers that are not multiples of 3 and 5', () => {
    expect(transformer('2')).toEqual('2');
  });

  it('transforms multiples of 3 and 5 to "FizzBuzz"', () => {
    expect(transformer('15')).toEqual('FizzBuzz');
  });

  it('ignores already transformed values', () => {
    expect(transformer('Whatever')).toEqual('Whatever');
  });
});
