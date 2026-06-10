const getStarSize = (isSmall?: boolean) => isSmall ? 16 : 24;

export const getRatingFillWidth = (
  rating: number,
  isSmall?: boolean,
) => {
  const normalizedRating = Math.min(
    5,
    Math.max(0, rating),
  );

  return normalizedRating * getStarSize(isSmall);
};

export const getRatingStarSize = getStarSize;

export const getRatingFillPercent = (
  rating: number,
  star: number,
) => {
  const normalizedRating = Math.min(
    5,
    Math.max(0, rating),
  );
  const fill = Math.min(
    1,
    Math.max(0, normalizedRating - (star - 1)),
  );

  return fill * 100;
};
