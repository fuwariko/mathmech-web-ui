import { css } from '@emotion/css';
import type { ReactNode } from 'react';

import { сolors, type TColors } from '../../theme/tokens';

interface IHeaderProps {
  /** Заголовок */
  title: string;

  /** Левый аксессуар */
  leftAccessory?: ReactNode | string;

  /** Правый аксессуар */
  rightAccessory?: ReactNode | string;

  /** Цвет фона */
  backgroundColor?: TColors;

  /** Цвет текста */
  textColor?: TColors;

  /** Расположение контента */
  contentPosition?: 'center' | 'space-between';

  /** sticky header */
  sticky?: boolean;
}

export const Header = ({
  title,
  leftAccessory,
  rightAccessory,
  backgroundColor = 'mainBlue',
  textColor = 'lightGrey02',
  contentPosition = 'space-between',
  sticky = false,
}: IHeaderProps) => {
  return (
    <header
      className={headerStyles(
        backgroundColor,
        textColor,
        sticky,
      )}
    >
      <div className={contentStyles}>
        <div className={topStyles(contentPosition)}>
          {leftAccessory && (
            <div className={accessoryStyles}>
              {leftAccessory}
            </div>
          )}

          {rightAccessory && (
            <div className={accessoryStyles}>
              {rightAccessory}
            </div>
          )}
        </div>

        <h1 className={titleStyles(contentPosition)}>
          {title}
        </h1>
      </div>
    </header>
  );
};

const headerStyles = (
  backgroundColor: TColors,
  textColor: TColors,
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

  background: ${сolors[backgroundColor]};
  color: ${сolors[textColor]};

  box-sizing: border-box;

  ${sticky &&
  css`
    position: sticky;
    top: 0;
  `}
`;

const contentStyles = css`
  width: 100%;
  max-width: 1024px;

  display: flex;
  flex-direction: column;

  align-items: flex-start;

  padding: 0 32px;

  box-sizing: border-box;
`;

const topStyles = (
  contentPosition: 'center' | 'space-between',
) => css`
  display: flex;

  justify-content: ${contentPosition};

  gap: 30px;

  align-items: baseline;

  width: 100%;

  margin-bottom: 12px;
`;

const accessoryStyles = css`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
`;

const titleStyles = (
  contentPosition: 'center' | 'space-between',
) => css`
  width: 100%;

  margin: 0;

  font-size: 64px;
  font-weight: 400;
  line-height: 1;

  letter-spacing: -1px;

  ${contentPosition === 'center' &&
  css`
    text-align: center;
  `}
`;