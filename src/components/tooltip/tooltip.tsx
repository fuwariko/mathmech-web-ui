import { css } from '@emotion/css';
import type { ReactElement, ReactNode } from 'react';


import { allColors, type TColors } from '../../theme/color-tokens';
import { Hint } from '../hint/hint';

type TTooltipPosition =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right';

type TTooltipIcon =
  | 'info'
  | 'warning'
  | 'question';

interface ITooltipProps {
  /** Контент тултипа */
  content: ReactNode;

  /** Позиция */
  position?: TTooltipPosition;

  /** Цвет */
  color?: TColors;

  /** Иконка */
  icon?: TTooltipIcon;

  /** Кастомный триггер */
  children?: ReactElement;

  className?: string;
}

export const Tooltip = ({
  content,
  position = 'top',
  color = 'darkGrey01',
  icon = 'info',
  children,
  className,
}: ITooltipProps) => {
  return (
    <Hint
      content={content}
      position={position}
      backgroundColor={color}
      className={className}
    >
      {children ?? (
        <div className={iconStyles(color)}>
          {renderIcon(icon)}
        </div>
      )}
    </Hint>
  );
};

const renderIcon = (
  icon: TTooltipIcon,
) => {
  switch (icon) {
    case 'warning':
      return '!';
    case 'question':
      return '?';
    default:
      return 'i';
  }
};

const iconStyles = (
  color: TColors,
) => css`
  width: 18px;
  height: 18px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  font-size: 12px;
  font-weight: 600;
  line-height: 1;

  color: #fff;
  background: ${allColors[color]};

  cursor: default;
  user-select: none;

  transition:
    transform 0.15s ease,
    opacity 0.15s ease;

  &:hover {
    transform: scale(1.08);
    opacity: 0.9;
  }
`;