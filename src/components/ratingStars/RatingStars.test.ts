import { describe, expect, it } from 'vitest';

import { getRatingFillPercent, getRatingFillWidth } from './RatingStars.utils';

describe('RatingStars', () => {
  it('calculates fill width from the actual star size', () => {
    expect(getRatingFillWidth(3, false)).toBe(72);
    expect(getRatingFillWidth(3, true)).toBe(48);
    expect(getRatingFillWidth(3.5, false, 48)).toBe(168);
  });

  it('clamps rating fill width to the five-star range', () => {
    expect(getRatingFillWidth(6, false)).toBe(120);
    expect(getRatingFillWidth(-1, false)).toBe(0);
  });

  it('calculates a stable fill percent per star', () => {
    expect([1, 2, 3, 4, 5].map((star) => getRatingFillPercent(3, star))).toEqual([
      100,
      100,
      100,
      0,
      0,
    ]);

    expect([1, 2, 3, 4, 5].map((star) => getRatingFillPercent(3.5, star))).toEqual([
      100,
      100,
      100,
      50,
      0,
    ]);

    expect([1, 2, 3, 4, 5].map((star) => getRatingFillPercent(4.25, star))).toEqual([
      100,
      100,
      100,
      100,
      25,
    ]);
  });
});
