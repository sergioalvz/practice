import { curry, pipe, map } from 'lodash/fp';
import { isNumber } from 'lodash';

const transformer = (multiples: number[], replacement: string, value: number | string) => {
  if (!isNumber(value) || multiples.some((number) => value % number !== 0)) {
    return value;
  }

  return replacement;
};

const fizzBuzzTransformer = curry(transformer)([3, 5], 'FizzBuzz');
const fizzTransformer = curry(transformer)([3], 'Fizz');
const buzzTransformer = curry(transformer)([5], 'Buzz');

export const fizzBuzz = pipe(
  map(fizzBuzzTransformer),
  map(fizzTransformer),
  map(buzzTransformer),
  map(String),
);
