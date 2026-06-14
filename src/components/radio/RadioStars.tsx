import React from 'react';
import * as S from './RadioStars.styles.ts';
import { StarFilledIcon, StarIcon } from '../../Icons/Icons.tsx';


type RadioStarsProps = {
  name?: string;
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  isError?: boolean;
  isMobile?: boolean;
  className?: string;
};

export const RadioStars: React.FC<RadioStarsProps> = ({
  name = "rating",
  rating, 
  setRating,
  isError,
  isMobile,
  className,
}) => {
  const size = isMobile ? 24 : 48;
  const handleRatingChange = (value: number) => {
      setRating(value);
    };
  
  return (
  <S.Wrapper>
    <S.StarsWrapper 
      role="radiogroup" 
      aria-labelledby={isError ? "error-label": undefined} 
      isError={isError} 
      className={className}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <label title={star.toString()} >
          <S.Input
            name={name}
            value={star}
            id={`${star}-star`}
            type="radio"
            onChange={() => handleRatingChange(star)}
            aria-label={`Оценка ${star}`}
            aria-checked={star === rating ? 'true' : 'false'}
          />
          {star <= rating ? (
            <S.StarWrapper $isMobile={isMobile}>
              <S.FocusSpan/>
              <StarFilledIcon size={size} color={"#FFB26B"} aria-hidden="true" />
            </S.StarWrapper>
            ) : (
            <S.StarWrapper $isMobile={isMobile}>
              <S.FocusSpan/>
              <StarIcon size={size} color={"#FFB26B"} aria-hidden="true" />
            </S.StarWrapper>
          )}
        </label>
      ))}
    </S.StarsWrapper>
    {isError && <S.ErrorMassage role="alert" id="error-label">Поставьте оценку</S.ErrorMassage>}
  </S.Wrapper>
  );
};
