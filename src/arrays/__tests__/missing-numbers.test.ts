import { expect, describe, it } from 'vitest';

import { missingNumbers, missingNumbersOptimized } from '../missing-numbers';

describe('missingNumbers', () => {
  it('should return missing numbers', () => {
    expect(missingNumbers([1, 4, 3])).toEqual([2, 5]);
    expect(missingNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([11, 12]);
  });
});

describe('missingNumbersOptimized', () => {
  it('should return missing numbers', () => {
    expect(missingNumbersOptimized([1, 4, 3])).toEqual([2, 5]);
    expect(missingNumbersOptimized([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([
      11, 12,
    ]);
  });
});
