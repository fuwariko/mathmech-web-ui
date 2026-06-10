export const normalizeRadioRating = (rating: number) => Math.min(
  5,
  Math.max(0, Math.round(rating)),
);

export const isRadioStarFilled = (
  star: number,
  rating: number,
  hovered: number | null = null,
) => star <= normalizeRadioRating(hovered ?? rating);
