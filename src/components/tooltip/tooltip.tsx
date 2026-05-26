 import { css, cx } from '@emotion/css';
import {
  useState,
  type ReactNode,
} from 'react';

import {
  сolors,
  type TColors,
} from '../../theme/tokens';

type TTooltipPosition =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right';

interface ITooltipProps {
  /** Элемент */
  children: ReactNode;

  /** Контент */
  content: ReactNode;

  /** Позиция */
  position?: TTooltipPosition;

  /** Цвет */
  color?: TColors;

  /** Дополнительный класс */
  className?: string;
}

export const Tooltip = ({
  children,
  content,
  position = 'top',
  color = 'darkGrey01',
  className,
}: ITooltipProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={cx(
        wrapperStyles,
        className,
      )}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      <div
        className={tooltipStyles(
          visible,
          position,
          color,
        )}
      >
        {content}
      </div>
    </div>
  );
};

const wrapperStyles = css`
  position: relative;

  display: inline-flex;

  width: fit-content;
`;

const tooltipStyles = (
  visible: boolean,
  position: TTooltipPosition,
  color: TColors,
) => css`
  position: absolute;

  z-index: 100;

  min-width: 220px;
  max-width: 320px;

  padding: 14px;

  border-radius: 14px;

  font-size: 13px;
  line-height: 18px;

  color: #fff;

  background: ${сolors[color]};

  box-shadow: 0 8px 24px rgba(0,0,0,0.14);

  opacity: ${visible ? 1 : 0};

  pointer-events: none;

  transition:
    opacity 0.2s ease,
    transform 0.2s ease;

  ${
    position === 'top' &&
    `
      bottom: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);
    `
  }

  ${
    position === 'bottom' &&
    `
      top: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);
    `
  }

  ${
    position === 'left' &&
    `
      right: calc(100% + 10px);
      top: 50%;
      transform: translateY(-50%);
    `
  }

  ${
    position === 'right' &&
    `
      left: calc(100% + 10px);
      top: 50%;
      transform: translateY(-50%);
    `
  }
`;