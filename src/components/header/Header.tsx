import { css, cx } from '@emotion/css';
import type { CSSProperties, ReactNode } from 'react';

import { useTheme, type TThemeColors } from '../../ThemeContext';

export interface HeaderProps {
  /** Заголовок */
  title?: string | ReactNode;

  /** Левый аксессуар */
  leftAccessory?: ReactNode | string;

  /** Правый аксессуар */
  rightAccessory?: ReactNode | string;

  /** Контент в верхней строке слева */
  topLeft?: ReactNode;

  /** Контент в верхней строке справа */
  topRight?: ReactNode;

  /** Контент под верхней строкой */
  children?: ReactNode;

  /** Цвет фона */
  backgroundColor?: TThemeColors;

  /** Цвет текста */
  textColor?: TThemeColors;

  /** Растягивать цвет фона на всю ширину */
  filled?: boolean;

  /** Максимальная ширина внутреннего контента */
  contentMaxWidth?: number | string;

  /** Горизонтальные отступы внутреннего контента */
  contentPaddingX?: number | string;

  /** sticky header */
  sticky?: boolean;

  className?: string;

  style?: CSSProperties;
}

export const Header = ({
  title,
  leftAccessory,
  rightAccessory,
  topLeft,
  topRight,
  children,
  backgroundColor = 'mainBlue',
  textColor = 'lightGrey02',
  filled = true,
  contentMaxWidth = 1024,
  contentPaddingX = 32,
  sticky = false,
  className,
  style,
}: HeaderProps) => {
  const theme = useTheme();
  const left = topLeft ?? leftAccessory;
  const right = topRight ?? rightAccessory;
  const hasTop = !!left || !!right;
  const hasBody = !!title || !!children;

  return (
    <header
      style={style}
      className={cx(
        headerStyles(
          theme[backgroundColor],
          theme[textColor],
          filled,
          sticky,
        ),
        className,
      )}
    >
      <div
        className={contentStyles(
          contentMaxWidth,
          contentPaddingX,
        )}
      >
        {hasTop && (
          <div className={topStyles}>
            <div className={accessoryStyles('left')}>
              {left}
            </div>

            <div className={accessoryStyles('right')}>
              {right}
            </div>
          </div>
        )}

        {hasBody && (
          <div className={bodyStyles}>
            {title && (
              <h1 className={titleStyles}>
                {title}
              </h1>
            )}

            {children}
          </div>
        )}
      </div>
    </header>
  );
};

const toCssSize = (value: number | string) =>
  typeof value === 'number' ? `${value}px` : value;

const headerStyles = (
  backgroundColor: string,
  textColor: string,
  filled: boolean,
  sticky: boolean,
) => css`
  display: flex;

  width: 100%;
  height: max-content;

  flex-direction: column;
  align-items: center;

  gap: 40px;

  padding: 32px 0;

  position: relative;
  z-index: 2;

  background: ${filled ? backgroundColor : 'transparent'};
  color: ${textColor};

  box-sizing: border-box;

  ${sticky &&
  css`
    position: sticky;
    top: 0;
  `}
`;

const contentStyles = (
  contentMaxWidth: number | string,
  contentPaddingX: number | string,
) => css`
  width: 100%;
  max-width: ${toCssSize(contentMaxWidth)};

  display: flex;
  flex-direction: column;

  align-items: flex-start;

  padding: 0 ${toCssSize(contentPaddingX)};

  box-sizing: border-box;
`;

const topStyles = css`
  display: flex;

  justify-content: space-between;

  gap: 30px;

  align-items: baseline;

  width: 100%;

  margin-bottom: 12px;
`;

const bodyStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`;

const titleStyles = css`
  margin: 0;
  font-size: 40px;
  line-height: 1.1;
  font-weight: 400;
`;

const accessoryStyles = (
  position: 'left' | 'right',
) => css`
  display: flex;

  flex: 1;

  ${position === 'left' &&
  css`
    justify-content: flex-start;
  `}

  ${position === 'right' &&
  css`
    justify-content: flex-end;
  `}
`;
