import React from 'react';
import * as S from './RatingStars.styles.ts';
import starFull from '../../assets/BigFullStarOrange.svg'
import starEmpty from '../../assets/BigEmptyStarOrange.svg'

interface RatingStarsProps {
  /** Оценка */
  rating: number;

  /** Размер звезд */
  isSmall?: boolean;

  /** Видимость для скринридера */
  ariaHidden?: boolean;
};

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating, 
  isSmall,
  ariaHidden,
}) => {
  return (
  <div 
    aria-label={ariaHidden ? undefined : `Оценка ${rating}`}
    role={ariaHidden ? undefined : 'img'}
    aria-hidden={ariaHidden}
  >
    <S.StarsYes rating={rating} isSmall={isSmall}>
        {[1, 2, 3, 4, 5].map(() => (
        <S.StarContainer><S.Star aria-hidden src={starFull} isSmall={isSmall} alt='' /></S.StarContainer>
      ))}
    </S.StarsYes>
    <S.StarsNo>
        {[1, 2, 3, 4, 5].map(() => (
        <S.StarContainer><S.Star aria-hidden src={starEmpty} isSmall={isSmall} alt='' /></S.StarContainer>
      ))}
    </S.StarsNo>
</div>
  );
};