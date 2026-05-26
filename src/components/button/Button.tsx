import { css } from '@emotion/css';
import type {
  ButtonHTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from 'react';
import { useTheme, type TThemeColors } from '../../ThemeContext';



type TButtonAriaRole = 'button' | 'link';

type TButtonSize = 'small' | 'large';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Текст внутри кнопки */
  children?: ReactNode | string;

  /** Иконка слева */
  icon?: ReactNode;

  /** Дизейбл кнопки */
  disabled?: boolean;

  /** Aria роль кнопки */
  role?: TButtonAriaRole;

  /** Цвет кнопки */
  color: TThemeColors;

  /** Размер кнопки */
  size?: TButtonSize;

  /** Цвет текста */
  textColor?: TThemeColors;

  /** Радиус */
  radius?: string;

  /** Действие по клику на кнопку */
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
  children,
  icon,
  disabled = false,
  role = 'button',
  color,
  size = 'small',
  textColor,
  radius,
  onClick,
  ...props
}: IButtonProps) => {
  const theme = useTheme();

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

        width: fit-content;

        cursor: ${disabled ? 'default' : 'pointer'};

        height: ${size === 'large'
          ? '72px'
          : '44px'};

        padding: ${
          iconOnly
            ? size === 'large'
              ? '24px'
              : '12px'
            : size === 'large'
              ? '0 24px'
              : '0 16px'
        };

        border-radius: ${
          radius ??
          (size === 'large'
            ? '20px'
            : '16px')
        };

        font-size: ${
          size === 'large'
            ? '16px'
            : '14px'
        };

        font-weight: 500;

        background: ${
          theme[
            color as keyof typeof theme
          ]
        };

        color: ${
          textColor
            ? theme[
                textColor as keyof typeof theme
              ]
            : '#ffffff'
        };

        opacity: ${disabled ? 0.5 : 1};

        pointer-events: ${
          disabled ? 'none' : 'auto'
        };

        transition:
          opacity 0.2s ease,
          transform 0.2s ease;

        &:hover {
          opacity: ${
            disabled ? 0.5 : 0.9
          };
        }

        &:active {
          transform: ${
            disabled
              ? 'none'
              : 'scale(0.98)'
          };
        }
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