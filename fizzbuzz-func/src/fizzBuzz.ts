import { isNumber } from 'lodash';
import { curry, pipe, map } from 'lodash/fp';

const isMultiple = (number: number, multiple: number) => number % multiple === 0;

const transformer = (multiples: number[], replacement: string, value: number | string) => {
  if (!isNumber(value)) {
    return value;
  }

  const isMultipleOfValue = curry(isMultiple)(value);

  return multiples.every(isMultipleOfValue) ? replacement : value;
};

const fizzBuzzier = curry(transformer)([3, 5], 'FizzBuzz');
const fizzier = curry(transformer)([3], 'Fizz');
const buzzier = curry(transformer)([5], 'Buzz');

export const fizzBuzz = pipe(
  map(fizzBuzzier),
  map(fizzier),
  map(buzzier),
  map(String),
);
