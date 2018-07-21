import { fizzBuzz } from '../src/fizzBuzz';

describe('fizzBuzz', () => {
  it('returns an array of the same number of elements', () => {
    const NUMBER_OF_ELEMENTS = 4;
    const numbers = Array(NUMBER_OF_ELEMENTS);

    const result = fizzBuzz(numbers);

    expect(result).toHaveLength(NUMBER_OF_ELEMENTS);
  });

  it('returns a string representation of every number', () => {
    const numbers = [1];

    const result = fizzBuzz(numbers);

    expect(result).toEqual(['1']);
  });

  it('returns multiples of 3 as "Fizz"', () => {
    const numbers = [3];

    const result = fizzBuzz(numbers);

    expect(result).toEqual(['Fizz']);
  });

  it('returns multiples of 5 as "Buzz"', () => {
    const numbers = [5];

    const result = fizzBuzz(numbers);

    expect(result).toEqual(['Buzz']);
  });

  it('returns multiples of 3 AND 5 as "FizzBuzz"', () => {
    const numbers = [15];

    const result = fizzBuzz(numbers);

    expect(result).toEqual(['FizzBuzz']);
  });

  it('plays nicely with multiple numbers', () => {
    const numbers = [1, 2, 4, 5, 9, 15, 21];

    const result = fizzBuzz(numbers);

    expect(result).toEqual(['1', '2', '4', 'Buzz', 'Fizz', 'FizzBuzz', 'Fizz']);
  });
});
