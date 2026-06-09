import React, { useState } from 'react';
import * as S from './RadioStars.styles.ts';
import { StarFilledIcon, StarIcon } from '../../icons/Icons.tsx';


type RadioStarsProps = {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;

  activeColor?: string;
  inactiveColor?: string;
  hoverColor?: string;

  isError?: boolean;
  isMobile?: boolean;
  className?: string;
};

export const RadioStars: React.FC<RadioStarsProps> = ({
  rating,
  setRating,
  activeColor = '#C25400',
  inactiveColor = '#D9D9D9',
  hoverColor = '#FFB26B',
  isError,
  isMobile,
  className,
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const size = isMobile ? 24 : 48;

  const getColor = (star: number) => {
    const value = hovered ?? rating;

    if (star <= value) {
      return hovered !== null ? hoverColor : activeColor;
    }

    return inactiveColor;
  };

  return (
    <S.Wrapper>
      <S.StarsWrapper
        role="radiogroup"
        isError={isError}
        className={className}
      >
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = star <= (hovered ?? rating);
          const color = getColor(star);

          return (
            <label
              key={star}
              onMouseEnter={() => setHovered(star)}
              onMouseLeave={() => setHovered(null)}
            >
              <S.Input
                type="radio"
                name="rating"
                value={star}
                checked={star === rating}
                onChange={() => setRating(star)}
              />

              <S.StarWrapper $isMobile={isMobile}>
                {isFilled ? (
                  <StarFilledIcon size={size} color={color} />
                ) : (
                  <StarIcon size={size} color={color} />
                )}
              </S.StarWrapper>
            </label>
          );
        })}
      </S.StarsWrapper>

      {isError && (
        <S.ErrorMassage role="alert" id="error-label">
          Поставьте оценку
        </S.ErrorMassage>
      )}
    </S.Wrapper>
  );
};