import styled from '@emotion/styled';
import { сolors, type TColors } from '../../theme/tokens.ts';

export const ToggleWrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Montserrat', sans-serif;
  cursor: pointer;

  &:has(input:disabled) {
    cursor: not-allowed;
  }
`;

export const Input = styled.input<{ color: TColors }>`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  white-space: nowrap;
  overflow: hidden;

  &:checked + span {
    background-color: ${props => сolors[props.color]};
    border-color: ${props => сolors[props.color]};
  }

  & + span::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${props => сolors[props.color]};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all .2s ease-in-out;
  }

  &:checked + span::after {
    transform: translateX(26px);
    background-color: #fff;
  }

  &:focus-visible + span {
    box-shadow: 0 0 0 2px ${props => сolors[props.color] + '80'};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled + span {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Span = styled.span<{ color: TColors }>`
  display: inline-flex;
  position: relative;
  margin: 2px 0;
  width: 54px;
  height: 26px;
  border-radius: 16px;
  border: 1px solid ${props => сolors[props.color]};
  background-color: transparent;
  cursor: pointer;
  transition: all .2s ease-in-out;
`;