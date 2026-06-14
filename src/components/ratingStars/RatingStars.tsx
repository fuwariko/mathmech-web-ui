import React from 'react';
import * as S from './RatingStars.styles.ts';
import { useTheme } from '../../ThemeContext';
import { getRatingFillPercent, getRatingStarSize } from './RatingStars.utils.ts';

const STAR_PATH =
  'M12 3.5L14.7 8.9L20.5 9.7L16.2 13.8L17.3 19.5L12 16.6L6.7 19.5L7.8 13.8L3.5 9.7L9.3 8.9L12 3.5Z';

export interface RatingStarsProps {
  /** Оценка */
  rating: number;

  /** Размер звезд */
  isSmall?: boolean;

  /** Размер звезд в px */
  size?: number;

  /** Видимость для скринридера */
  ariaHidden?: boolean;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  isSmall,
  size: customSize,
  ariaHidden,
}) => {
  const theme = useTheme();
  const size = getRatingStarSize(isSmall, customSize);

  return (
    <S.Wrapper>
      <S.StarsRow
        aria-label={ariaHidden ? undefined : `Оценка ${rating} из 5`}
        role={ariaHidden ? undefined : 'img'}
        aria-hidden={ariaHidden}
      >
        {[1, 2, 3, 4, 5].map((star) => (
          <S.StarContainer key={star} size={size}>
            <RatingStar
              size={size}
              color={theme.lightOrange01}
              fillPercent={getRatingFillPercent(rating, star)}
            />
          </S.StarContainer>
        ))}
      </S.StarsRow>
    </S.Wrapper>
  );
};

interface RatingStarProps {
  size: number;
  color: string;
  fillPercent: number;
}

const RatingStar = ({
  size,
  color,
  fillPercent,
}: RatingStarProps) => {
  const clipId = React.useId();
  const fillWidth = (24 * fillPercent) / 100;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <clipPath id={clipId}>
          <rect x="0" y="0" width={fillWidth} height="24" />
        </clipPath>
      </defs>

      <path
        d={STAR_PATH}
        fill={color}
        stroke="none"
        clipPath={`url(#${clipId})`}
      />

      <path
        d={STAR_PATH}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
