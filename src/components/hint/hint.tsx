import { css, cx } from '@emotion/css';
import {
  useState,
  type ReactNode,
} from 'react';

import {
  сolors,
  type TColors,
} from '../../theme/tokens';

type THintPosition =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right';

interface IHintProps {
  /** Элемент */
  children: ReactNode;

  /** Текст хинта */
  text: string;

  /** Позиция */
  position?: THintPosition;

  /** Цвет */
  color?: TColors;

  /** Дополнительный класс */
  className?: string;
}

export const Hint = ({
  children,
  text,
  position = 'top',
  color = 'darkGrey01',
  className,
}: IHintProps) => {
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
        className={hintStyles(
          visible,
          position,
          color,
        )}
      >
        {text}
      </div>
    </div>
  );
};

const wrapperStyles = css`
  position: relative;

  display: inline-flex;

  width: fit-content;
`;

const hintStyles = (
  visible: boolean,
  position: THintPosition,
  color: TColors,
) => css`
  position: absolute;

  z-index: 100;

  width: max-content;
  max-width: 240px;

  padding: 8px 12px;

  border-radius: 10px;

  font-size: 12px;
  line-height: 16px;

  color: #fff;

  background: ${сolors[color]};

  opacity: ${visible ? 1 : 0};

  pointer-events: none;

  transition:
    opacity 0.2s ease,
    transform 0.2s ease;

  ${
    position === 'top' &&
    `
      bottom: calc(100% + 8px);
      left: 50%;
      transform: translateX(-50%);
    `
  }

  ${
    position === 'bottom' &&
    `
      top: calc(100% + 8px);
      left: 50%;
      transform: translateX(-50%);
    `
  }

  ${
    position === 'left' &&
    `
      right: calc(100% + 8px);
      top: 50%;
      transform: translateY(-50%);
    `
  }

  ${
    position === 'right' &&
    `
      left: calc(100% + 8px);
      top: 50%;
      transform: translateY(-50%);
    `
  }
`;