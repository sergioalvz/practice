export function transformer(value: string): string {
  const n = parseInt(value, 10);

  if (isNaN(n)) {
    return value;
  }

  return n % 3 === 0 && n % 5 === 0 ? 'FizzBuzz' : value;
}
