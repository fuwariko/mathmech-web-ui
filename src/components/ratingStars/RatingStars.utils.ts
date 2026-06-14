const DEFAULT_STAR_SIZE = 24;
const SMALL_STAR_SIZE = 16;

const getStarSize = (isSmall?: boolean, size?: number) => {
  if (size !== undefined) {
    return Math.max(1, size);
  }

  return isSmall ? SMALL_STAR_SIZE : DEFAULT_STAR_SIZE;
};

export const getRatingFillWidth = (
  rating: number,
  isSmall?: boolean,
  size?: number,
) => {
  const normalizedRating = Math.min(
    5,
    Math.max(0, rating),
  );

  return normalizedRating * getStarSize(isSmall, size);
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
