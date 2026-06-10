import { describe, expect, it } from 'vitest';

import { isRadioStarFilled, normalizeRadioRating } from './RadioStars.utils';

describe('RadioStars', () => {
  it('normalizes rating to whole values in the five-star range', () => {
    expect(normalizeRadioRating(3.4)).toBe(3);
    expect(normalizeRadioRating(3.5)).toBe(4);
    expect(normalizeRadioRating(6)).toBe(5);
    expect(normalizeRadioRating(-1)).toBe(0);
  });

  it('fills exactly the selected whole number of stars', () => {
    expect([1, 2, 3, 4, 5].map((star) => isRadioStarFilled(star, 3))).toEqual([
      true,
      true,
      true,
      false,
      false,
    ]);
  });
});
