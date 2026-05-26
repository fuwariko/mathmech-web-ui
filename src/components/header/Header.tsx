import { css } from '@emotion/css';
import type { ReactNode } from 'react';

import { сolors, type TColors } from '../../theme/tokens';

interface IHeaderProps {
  /** Заголовок */
  title: string | ReactNode;

  /** Левый аксессуар */
  leftAccessory?: ReactNode | string;

  /** Правый аксессуар */
  rightAccessory?: ReactNode | string;

  /** Цвет фона */
  backgroundColor?: TColors;

  /** Цвет текста */
  textColor?: TColors;

  /** sticky header */
  sticky?: boolean;
}

export const Header = ({
  title,
  leftAccessory,
  rightAccessory,
  backgroundColor = 'mainBlue',
  textColor = 'lightGrey02',
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
        <div className={topStyles}>
          <div className={accessoryStyles('left')}>
            {leftAccessory}
          </div>

          <div className={accessoryStyles('right')}>
            {rightAccessory}
          </div>
        </div>

        <h1>
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

const topStyles = css`
  display: flex;

  justify-content: space-between;

  gap: 30px;

  align-items: baseline;

  width: 100%;

  margin-bottom: 12px;
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