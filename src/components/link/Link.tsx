import { css, cx } from '@emotion/css';
import type {
  AnchorHTMLAttributes,
  CSSProperties,
  ReactNode,
} from 'react';
import { useTheme, type TThemeColors } from '../../ThemeContext';

export type LinkVariant = 'text' | 'button';
export type LinkUnderline = 'always' | 'hover' | 'none';
export type LinkSize = 'small' | 'medium' | 'large';

export interface LinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
  children: ReactNode;
  variant?: LinkVariant;
  underline?: LinkUnderline;
  size?: LinkSize;
  color?: TThemeColors;
  textColor?: TThemeColors;
  radius?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  external?: boolean;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const Link = ({
  children,
  variant = 'text',
  underline = variant === 'text' ? 'always' : 'none',
  size = 'medium',
  color = 'mainNavy',
  textColor,
  radius,
  leftIcon,
  rightIcon,
  external = false,
  disabled = false,
  className,
  style,
  target,
  rel,
  href,
  onClick,
  ...props
}: LinkProps) => {
  const theme = useTheme();
  const resolvedTarget = external ? '_blank' : target;
  const resolvedRel = external
    ? Array.from(new Set([...(rel?.split(' ') ?? []), 'noreferrer', 'noopener'])).join(' ')
    : rel;

  return (
    <a
      {...props}
      href={disabled ? undefined : href}
      target={resolvedTarget}
      rel={resolvedRel}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : props.tabIndex}
      onClick={(event) => {
        if (disabled) {
          event.preventDefault();
          return;
        }

        onClick?.(event);
      }}
      style={style}
      className={cx(
        linkStyles({
          variant,
          underline,
          size,
          background: theme[color as keyof typeof theme],
          textColor: textColor
            ? theme[textColor as keyof typeof theme]
            : variant === 'button'
              ? theme.white
              : theme[color as keyof typeof theme],
          radius,
          disabled,
        }),
        className,
      )}
    >
      {leftIcon && <span aria-hidden="true" className={iconStyles}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span aria-hidden="true" className={iconStyles}>{rightIcon}</span>}
    </a>
  );
};

const linkStyles = ({
  variant,
  underline,
  size,
  background,
  textColor,
  radius,
  disabled,
}: {
  variant: LinkVariant;
  underline: LinkUnderline;
  size: LinkSize;
  background: string;
  textColor: string;
  radius?: string;
  disabled: boolean;
}) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: fit-content;
  box-sizing: border-box;
  color: ${textColor};
  font-size: ${size === 'large' ? '16px' : size === 'small' ? '13px' : '14px'};
  font-weight: 500;
  line-height: 1.2;
  cursor: ${disabled ? 'default' : 'pointer'};
  opacity: ${disabled ? 0.55 : 1};
  pointer-events: ${disabled ? 'none' : 'auto'};
  transition:
    opacity 0.2s ease,
    text-decoration-color 0.2s ease;

  ${variant === 'button'
    ? css`
        min-height: ${size === 'large' ? '72px' : size === 'small' ? '36px' : '44px'};
        padding: ${size === 'large' ? '0 24px' : size === 'small' ? '0 14px' : '0 16px'};
        border-radius: ${radius ?? (size === 'large' ? '20px' : '16px')};
        background: ${background};
        text-decoration: none;
      `
    : css`
        padding: 0;
        background: transparent;
        text-decoration-line: ${underline === 'none' ? 'none' : 'underline'};
        text-decoration-color: ${underline === 'hover' ? 'transparent' : 'currentColor'};
        text-underline-offset: 0.2em;
      `}

  &:hover {
    opacity: ${disabled ? 0.55 : 0.9};
    ${underline === 'hover' ? 'text-decoration-color: currentColor;' : ''}
  }

  &:active {
    transform: none;
  }
`;

const iconStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
`;
