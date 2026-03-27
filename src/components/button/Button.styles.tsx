import styled from '@emotion/styled';  
;  
import { buttonVariants } from './Button.variants';  
import type { ButtonProps } from './Button.types';
import { sizes } from '../../theme/tokens';

export const StyledButton = styled.button<ButtonProps>`
  height: ${({ size = 'md' }) => sizes[size]};
  padding: 0 16px;
  cursor: pointer;
  font-weight: 500;
  background: ${({ variant, color }) => buttonVariants[variant](color).background};
  color: ${({ variant, color }) => buttonVariants[variant](color).color};
  border: ${({ variant, color }) => buttonVariants[variant](color).border || 'none'};

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;