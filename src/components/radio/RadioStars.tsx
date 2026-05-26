import React from 'react';
import * as S from './RadioStars.styles.ts';
import starFull from '../../assets/BigFullStarOrange.svg'
import starEmpty from '../../assets/BigEmptyStarOrange.svg'

type RadioStarsProps = {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  isError?: boolean;
  className?: string;
};

export const RadioStars: React.FC<RadioStarsProps> = ({
  rating, 
  setRating,
  isError,
  className,
}) => {
  const handleRatingChange = (value: number) => {
      setRating(value);
    };
  return (
  <S.Wrapper>
    <S.StarsWrapper role="radiogroup" aria-labelledby={isError ? "error-label": ""} isError={isError} className={className}>
      {[1, 2, 3, 4, 5].map((star) => (
        <label title={star.toString()} >
          <S.Input
            name="rating"
            value={star}
            id={`${star}-star`}
            type="radio"
            onChange={() => handleRatingChange(star)}
            aria-label={`Оценка ${star}`}
          />
          {star <= rating ? (
            <S.StarWrapper>
              <S.FocusSpan/>
              <img src={starFull} alt="" aria-hidden="true"/>
            </S.StarWrapper>
            ) : (
            <S.StarWrapper>
              <S.FocusSpan/>
              <img src={starEmpty} alt="" aria-hidden="true"/>
            </S.StarWrapper>
          )}
        </label>
      ))}
    </S.StarsWrapper>
    {isError && <S.ErrorMassage role="alert" id="error-label">Поставьте оценку</S.ErrorMassage>}
  </S.Wrapper>
  );
};