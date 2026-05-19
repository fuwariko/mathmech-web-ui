import { css } from '@emotion/css';
import type {
  ButtonHTMLAttributes,
  MouseEventHandler,
} from 'react';

import { сolors, type TColors } from '../../theme/tokens';

type TButtonAriaRole = 'button' | 'link';
type TButtonSize = 'small' | 'large';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Текст внутри кнопки */
  children?:  React.ReactNode | string;

  /** Иконка слева */
  icon?: React.ReactNode;

  /** Дизейбл кнопки */
  disabled?: boolean;

  /** Aria роль кнопки */
  role?: TButtonAriaRole;

  /** Цвет кнопки */
  color: TColors;

  /** Размер кнопки */
  size?: TButtonSize;

  /** Цвет текста */
  textColor?: TColors;

  /** Радиус */
  radius?: string;

  /** Действие по клику на кнопку */
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  children,
  icon,
  disabled = false,
  role = 'button',
  color,
  size = 'small',
  textColor = 'lightGrey02',
  radius,
  onClick,
  ...props
}: IButtonProps) => {
  const iconOnly = !!icon && !children;

  return (
    <button
      role={role}
      disabled={disabled}
      onClick={onClick}
      className={css`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        border: none;

        cursor: ${disabled ? 'default' : 'pointer'};

        width: fit-content;

        height: ${size === 'large' ? '72px' : '44px'};

        padding: ${
          iconOnly
            ? size === 'large'
              ? '24px'
              : '12px'
            : size === 'large'
              ? '0 24px'
              : '0 16px'
        };

        border-radius: ${radius ??
        (size === 'large' ? '20px' : '16px')};

        font-size: ${size === 'large' ? '16px' : '14px'};
        font-weight: 500;

        background: ${сolors[color]};
        color: ${сolors[textColor]};

        opacity: ${disabled ? 0.5 : 1};
        pointer-events: ${disabled ? 'none' : 'auto'};
      `}
      {...props}
    >
      {icon && (
        <span
          className={css`
            display: inline-flex;
            align-items: center;
          `}
        >
          {icon}
        </span>
      )}

      {children && <span>{children}</span>}
    </button>
  );
};