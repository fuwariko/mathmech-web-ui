import styled from '@emotion/styled';
import type { ReactElement, ButtonHTMLAttributes } from 'react';

export const ButtonVariants = {
  primary: {
    bg: '#1E4391',
    text: '#FFFFFF',
  },
  secondary: {
    bg: '#E5E7EB',
    text: '#6B7280',
  },
} as const;

type ButtonVariant = keyof typeof ButtonVariants;

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  icon?: ReactElement;
  size?: 'small' | 'large';
  variant?: ButtonVariant;
}

export const Button = ({
  label,
  icon,
  size = 'small',
  variant = 'primary',
  disabled,
  ...props
}: IButtonProps) => {
  const iconOnly = !!icon && !label;

  return (
    <Wrapper
      size={size}
      variant={variant}
      iconOnly={iconOnly}
      disabled={disabled}
      {...props}
    >
      {icon && <IconWrapper>{icon}</IconWrapper>}
      {label && <span>{label}</span>}
    </Wrapper>
  );
};

const Wrapper = styled.button<{
  size: 'small' | 'large';
  variant: ButtonVariant;
  iconOnly: boolean;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: none;
  cursor: pointer;

  width: fit-content;

  /* HEIGHT */
  height: ${({ size }) => (size === 'large' ? '72px' : '44px')};

  /* PADDING */
  padding: ${({ size, iconOnly }) => {
    if (iconOnly) {
      return size === 'large' ? '24px' : '12px';
    }
    return size === 'large' ? '0 24px' : '0 16px';
  }};

  /* RADIUS */
  border-radius: ${({ size }) => (size === 'large' ? '20px' : '16px')};

  /* FONT */
  font-size: ${({ size }) => (size === 'large' ? '16px' : '14px')};
  font-weight: 500;

  /* COLORS */
  background: ${({ variant }) => ButtonVariants[variant].bg};
  color: ${({ variant }) => ButtonVariants[variant].text};

  /* DISABLED */
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
`;