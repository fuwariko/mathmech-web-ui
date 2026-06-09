import React from 'react';
import * as S from './RatingStars.styles.ts';
import { StarFilledIcon, StarIcon } from '../../icons/Icons.tsx';


interface RatingStarsProps {
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
  const size = isSmall ? 16 : 24;

  return (
    <div
      aria-label={ariaHidden ? undefined : `Оценка ${rating}`}
      role={ariaHidden ? undefined : 'img'}
      aria-hidden={ariaHidden}
    >
      <S.StarsYes rating={rating} isSmall={isSmall}>
        {[1, 2, 3, 4, 5].map((i) => (
          <S.StarContainer key={i}>
            <StarFilledIcon size={size} />
          </S.StarContainer>
        ))}
      </S.StarsYes>

      <S.StarsNo>
        {[1, 2, 3, 4, 5].map((i) => (
          <S.StarContainer key={i}>
            <StarIcon size={size} />
          </S.StarContainer>
        ))}
      </S.StarsNo>
    </div>
  );
};