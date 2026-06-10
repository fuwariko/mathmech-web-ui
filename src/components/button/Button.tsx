import { css, cx } from '@emotion/css';
import type {
  ButtonHTMLAttributes,
  CSSProperties,
  MouseEventHandler,
  ReactNode,
} from 'react';
import {
  useTheme,
  type AppTheme,
  type TThemeColors,
} from '../../ThemeContext';

type TButtonSize = 'small' | 'large';
type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;

  icon?: ReactNode;

  disabled?: boolean;

  color?: TThemeColors;

  variant?: ButtonVariant;

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
  variant = 'primary',
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
  const ariaLabel = props['aria-label'] ?? (iconOnly ? 'Действие' : undefined);

  return (
    <button
      {...props}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      style={style}
      className={cx(
        styles.base(theme, disabled, textColor),
        styles.variant(theme, variant, color),
        styles.size(theme, size, iconOnly),
        styles.radius(size, radius),
        className,
      )}
    >
      {icon && (
        <span className={styles.icon}>
          {icon}
        </span>
      )}

      {children}
    </button>
  );
};

const styles = {
  base: (
    theme: AppTheme,
    disabled: boolean,
    textColor?: TThemeColors,
  ) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: fit-content;
    border: none;
    cursor: ${disabled ? 'default' : 'pointer'};
    color: ${textColor ? theme[textColor] : theme.buttonColorText};
    font-weight: 500;
    opacity: ${disabled ? 0.5 : 1};
    pointer-events: ${disabled ? 'none' : 'auto'};
    transition:
      background-color 0.2s ease,
      opacity 0.2s ease,
      padding 0.2s ease,
      font-size 0.2s ease,
      transform 0.2s ease;

    &:hover {
      opacity: ${disabled ? 0.5 : 0.9};
    }

    &:active {
      transform: ${disabled ? 'none' : 'scale(0.98)'};
    }
  `,

  variant: (
    theme: AppTheme,
    variant: ButtonVariant,
    color?: TThemeColors,
  ) => {
    const backgroundColor = color
      ? theme[color]
      : {
          primary: theme.buttonColorPrimary,
          secondary: theme.buttonColorSecondary,
          danger: theme.buttonColorDanger,
        }[variant];

    return css`
      background: ${backgroundColor};
    `;
  },

  size: (
    theme: AppTheme,
    size: TButtonSize,
    iconOnly: boolean,
  ) => {
    const map = {
      small: css`
        height: 44px;
        padding: ${iconOnly ? theme.buttonPaddingSx : `0 ${theme.buttonPaddingMx}`};
        font-size: ${theme.buttonFontSizeM};
      `,
      large: css`
        height: 72px;
        padding: ${iconOnly ? theme.buttonPaddingLx : `0 ${theme.buttonPaddingLx}`};
        font-size: ${theme.buttonFontSizeL};
      `,
    };

    return map[size];
  },

  radius: (size: TButtonSize, radius?: string) => css`
    border-radius: ${radius ?? (size === 'large' ? '20px' : '16px')};
  `,

  icon: css`
    display: inline-flex;
    align-items: center;
  `,
};
