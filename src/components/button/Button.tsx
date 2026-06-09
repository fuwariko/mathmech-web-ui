import { css, cx } from '@emotion/css';
import type {
  ButtonHTMLAttributes,
  CSSProperties,
  MouseEventHandler,
  ReactNode,
} from 'react';
import { useTheme, type TThemeColors } from '../../ThemeContext';

type TButtonSize = 'small' | 'large';

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;

  icon?: ReactNode;

  disabled?: boolean;

  color: TThemeColors;

  size?: TButtonSize;

  textColor?: TThemeColors;

  radius?: string;

  onClick?: MouseEventHandler<HTMLButtonElement>;

  className?: string;

  style?: CSSProperties;
}

export const Button = ({
  children,
  icon,
  disabled = false,
  color,
  size = 'small',
  textColor,
  radius,
  onClick,

  className,
  style,

  ...props
}: IButtonProps) => {
  const theme = useTheme();

  const iconOnly = !!icon && !children;

  return (
    <button
      {...props}
      disabled={disabled}
      onClick={onClick}
      style={style}
      className={cx(
        css`
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
              : '#fff'
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
        `,
        className,
      )}
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

      {children}
    </button>
  );
};