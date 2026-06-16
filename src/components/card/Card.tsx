import { css, cx } from '@emotion/css';
import type { ReactNode } from 'react';
import { useTheme } from '../../ThemeContext';

export type TCardDirection = 'vertical' | 'horizontal';

interface ICardProps {
  /** Верхняя часть карточки */
  header?: ReactNode;

  /** Центральная часть карточки */
  content?: ReactNode;

  /** Нижняя часть карточки */
  footer?: ReactNode;

  /** Направление контента */
  direction?: TCardDirection;

  /** Скругление углов (px) */
  borderRadius?: number;

  /** Дополнительный className */
  className?: string;
}

export const Card = ({
  header,
  content,
  footer,
  direction = 'vertical',
  borderRadius = 15,
  className,
}: ICardProps) => {
  const theme = useTheme();

  return (
    <div
      className={cx(
        cardStyles(
          direction,
          borderRadius,
          theme.backgroundPrimary,
          theme.surfacePrimary,
          theme.surfaceText,
          theme.mainGrey,
        ),
        className,
      )}
    >
      {header && (
        <div className={headerStyles}>
          {header}
        </div>
      )}

      {content && (
        <div className={contentStyles(direction)}>
          {content}
        </div>
      )}

      {footer && (
        <div className={footerStyles}>
          {footer}
        </div>
      )}
    </div>
  );
};

const cardStyles = (
  direction: TCardDirection,
  borderRadius: number,
  fallbackBackgroundColor: string,
  surfaceColor: string,
  textColor: string,
  borderColor: string,
) => css`
  box-sizing: border-box;

  display: flex;

  flex-direction: ${direction === 'horizontal' ? 'row' : 'column'};

  justify-content: space-between;

  gap: 16px;

  padding: 24px 20px 20px;

  border: 1px solid ${borderColor};

  border-radius: ${borderRadius}px;

  background: ${surfaceColor || fallbackBackgroundColor};

  color: ${textColor};

  min-width: 300px;

  width: fit-content;

  max-width: 100%;

  height: fit-content;
`;

const headerStyles = css`
  display: flex;
  align-items: center;
  width: 100%;
`;

const contentStyles = (direction: TCardDirection) => css`
  display: flex;
  flex-direction: ${direction === 'horizontal' ? 'row' : 'column'};
  gap: 12px;
  width: 100%;
`;

const footerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-top: auto;
  width: 100%;
`;
