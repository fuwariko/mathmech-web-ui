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

  borderColor?: TThemeColors;

  variant?: ButtonVariant;

  size?: TButtonSize;

  textColor?: TThemeColors;

  radius?: string;

  bareIcon?: boolean;

  onClick?: MouseEventHandler<HTMLButtonElement>;

  className?: string;

  style?: CSSProperties;
}

export const Button = ({
  children,
  icon,
  disabled = false,
  color,
  borderColor,
  variant = 'primary',
  size = 'small',
  textColor,
  radius,
  bareIcon = false,
  onClick,

  className,
  style,

  ...props
}: IButtonProps) => {
  const theme = useTheme();

  const iconOnly = !!icon && !children;
  const isBareIcon = iconOnly && bareIcon;
  const ariaLabel = props['aria-label'] ?? (iconOnly ? 'Действие' : undefined);

  return (
    <button
      {...props}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      style={style}
      className={cx(
        styles.base(theme, disabled, textColor, isBareIcon),
        styles.variant(theme, variant, color, borderColor, isBareIcon),
        styles.size(theme, size, iconOnly, isBareIcon),
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
    isBareIcon?: boolean,
  ) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: fit-content;
    box-sizing: border-box;
    border: 1px solid transparent;
    cursor: ${disabled ? 'default' : 'pointer'};
    color: ${textColor
      ? theme[textColor]
      : isBareIcon
        ? theme.textPrimary
        : theme.buttonColorText};
    font-weight: 500;
    opacity: ${disabled ? 0.5 : 1};
    pointer-events: ${disabled ? 'none' : 'auto'};
    transition:
      background-color 0.2s ease,
      border-color 0.2s ease,
      color 0.2s ease,
      opacity 0.2s ease,
      transform 0.2s ease;

    &:hover {
      opacity: ${disabled ? 0.5 : 0.9};
    }

    &:active {
      transform: none;
    }
  `,

  variant: (
    theme: AppTheme,
    variant: ButtonVariant,
    color?: TThemeColors,
    borderColor?: TThemeColors,
    isBareIcon?: boolean,
  ) => {
    if (isBareIcon) {
      return css`
        background: transparent;
        border-color: transparent;
      `;
    }

    const backgroundColor = color
      ? theme[color]
      : {
          primary: theme.buttonColorPrimary,
          secondary: theme.buttonColorSecondary,
          danger: theme.buttonColorDanger,
        }[variant];

    return css`
      background: ${backgroundColor};
      border-color: ${borderColor ? theme[borderColor] : 'transparent'};
    `;
  },

  size: (
    theme: AppTheme,
    size: TButtonSize,
    iconOnly: boolean,
    isBareIcon: boolean,
  ) => {
    if (isBareIcon) {
      return css`
        height: auto;
        min-width: 0;
        padding: 0;
        font-size: ${size === 'large'
          ? theme.buttonFontSizeL
          : theme.buttonFontSizeM};
        line-height: 1;
      `;
    }

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
