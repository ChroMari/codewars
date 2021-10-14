/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

export const positiveSum = (arr: number[]): number => {
  return arr.reduce((sum: number, item: number): number => {
    if (item > 0) sum += item;
    return sum;
  }, 0);
}
