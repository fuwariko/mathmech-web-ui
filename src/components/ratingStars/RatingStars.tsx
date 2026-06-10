import React from 'react';
import * as S from './RatingStars.styles.ts';
import { StarFilledIcon, StarIcon } from '../../icons/Icons.tsx';
import { getRatingFillPercent, getRatingStarSize } from './RatingStars.utils.ts';


export interface RatingStarsProps {
  /** Оценка */
  rating: number;

  /** Размер звезд */
  isSmall?: boolean;

  /** Видимость для скринридера */
  ariaHidden?: boolean;
}

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  isSmall,
  ariaHidden,
}) => {
  const size = getRatingStarSize(isSmall);

  return (
    <div
      aria-label={ariaHidden ? undefined : `Оценка ${rating}`}
      role={ariaHidden ? undefined : 'img'}
      aria-hidden={ariaHidden}
    >
      <S.StarsRow>
        {[1, 2, 3, 4, 5].map((star) => (
          <S.StarContainer key={star} size={size}>
            <StarIcon size={size} />
            <S.StarFill fillPercent={getRatingFillPercent(rating, star)}>
              <StarFilledIcon size={size} />
            </S.StarFill>
          </S.StarContainer>
        ))}
      </S.StarsRow>
    </div>
  );
};
