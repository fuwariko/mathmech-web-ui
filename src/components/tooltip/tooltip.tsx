import { css, cx } from '@emotion/css';
import { useState, type ReactNode } from 'react';
import { сolors, type TColors } from '../../theme/tokens';

type TTooltipPosition = 'top' | 'bottom' | 'left' | 'right';
type TTooltipIcon = 'info' | 'warning' | 'question';

interface ITooltipProps {
  /** Контент тултипа */
  content: ReactNode;

  /** Позиция */
  position?: TTooltipPosition;

  /** Цвет */
  color?: TColors;

  /** Иконка триггера */
  icon?: TTooltipIcon;

  /** Кастомный триггер вместо иконки */
  children?: ReactNode;

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
  const [visible, setVisible] = useState(false);

  return (
    <div
      className={cx(wrapperStyles, className)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children ? (
        children
      ) : (
        <div className={iconStyles(color)}>
          {renderIcon(icon)}
        </div>
      )}

      <div
        className={tooltipStyles(visible, position, color)}
        role="tooltip"
      >
        {content}
      </div>
    </div>
  );
};


const renderIcon = (icon: TTooltipIcon) => {
  switch (icon) {
    case 'warning':
      return '!';
    case 'question':
      return '?';
    default:
      return 'i';
  }
};

const wrapperStyles = css`
  position: relative;
  display: inline-flex;
  align-items: center;
`;

/** круглая иконка */
const iconStyles = (color: TColors) => css`
  width: 18px;
  height: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  font-size: 12px;
  font-weight: 600;
  line-height: 1;

  color: #fff;
  background: ${сolors[color]};

  cursor: default;

  user-select: none;

  transition: transform 0.15s ease, opacity 0.15s ease;

  &:hover {
    transform: scale(1.08);
    opacity: 0.9;
  }
`;

const tooltipStyles = (
  visible: boolean,
  position: TTooltipPosition,
  color: TColors,
) => css`
  position: absolute;
  z-index: 100;

  min-width: 200px;
  max-width: 280px;

  padding: 10px 12px;

  border-radius: 10px;

  font-size: 13px;
  line-height: 18px;

  color: #fff;
  background: ${сolors[color]};

  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.14);

  opacity: ${visible ? 1 : 0};
  transform: ${visible ? 'translateY(0)' : 'translateY(4px)'};

  pointer-events: none;

  transition: opacity 0.18s ease, transform 0.18s ease;

  ${
    position === 'top' &&
    `
      bottom: calc(100% + 8px);
      left: 50%;
      transform: translateX(-50%) translateY(${visible ? '0' : '4px'});
    `
  }

  ${
    position === 'bottom' &&
    `
      top: calc(100% + 8px);
      left: 50%;
      transform: translateX(-50%) translateY(${visible ? '0' : '-4px'});
    `
  }

  ${
    position === 'left' &&
    `
      right: calc(100% + 8px);
      top: 50%;
      transform: translateY(-50%) translateX(${visible ? '0' : '4px'});
    `
  }

  ${
    position === 'right' &&
    `
      left: calc(100% + 8px);
      top: 50%;
      transform: translateY(-50%) translateX(${visible ? '0' : '-4px'});
    `
  }
`;