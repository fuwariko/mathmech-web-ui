import React, { useId, useState } from 'react';
import * as S from './RadioStars.styles.ts';
import { StarFilledIcon, StarIcon } from '../../icons/Icons.tsx';
import { isRadioStarFilled } from './RadioStars.utils.ts';


export type RadioStarsProps = {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;

  activeColor?: string;
  inactiveColor?: string;
  hoverColor?: string;

  isError?: boolean;
  isMobile?: boolean;
  name?: string;
  ariaLabel?: string;
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
  name,
  ariaLabel = 'Оценка',
  className,
}) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const generatedName = useId();
  const groupName = name ?? `rating-${generatedName}`;

  const size = isMobile ? 24 : 48;

  const getColor = (star: number) => {
    if (isRadioStarFilled(star, rating, hovered)) {
      return hovered !== null ? hoverColor : activeColor;
    }

    return inactiveColor;
  };

  return (
    <S.Wrapper>
      <S.StarsWrapper
        role="radiogroup"
        aria-label={ariaLabel}
        aria-invalid={isError || undefined}
        aria-describedby={isError ? `${groupName}-error` : undefined}
        isError={isError}
        className={className}
      >
        {[1, 2, 3, 4, 5].map((star) => {
          const isFilled = isRadioStarFilled(star, rating, hovered);
          const color = getColor(star);

          return (
            <label
              key={star}
              onMouseEnter={() => setHovered(star)}
              onMouseLeave={() => setHovered(null)}
            >
              <S.Input
                type="radio"
                name={groupName}
                value={star}
                checked={star === rating}
                aria-label={`${star} из 5`}
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
        <S.ErrorMassage role="alert" id={`${groupName}-error`}>
          Поставьте оценку
        </S.ErrorMassage>
      )}
    </S.Wrapper>
  );
};
