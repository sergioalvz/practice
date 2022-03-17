export function applyDiscount(sum: number, percentage: number): number {
  return sum * ((100 - percentage) / 100);
}
