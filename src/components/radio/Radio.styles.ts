import styled from '@emotion/styled';
import { allColors, type TColors } from '../../theme/color-tokens.ts';

export const Input = styled.input<{ color: TColors }>`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked + span {
    border-color: ${props => allColors[props.color]};
    background-color: #fff;
  }
  &:checked + span::before {
    content: '';
    width: 9px;
    height: 9px;
    background-color: ${props => allColors[props.color]};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:focus + span {
    box-shadow: 0 0 0 2px ${props => allColors[props.color]+ '80'};
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:disabled + span {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  gap: 6px;

  &:has(input:disabled) {
    cursor: not-allowed;
  }
`;
export const Span = styled.span`
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border: 1px solid #d3d3d3;
  border-radius: 50%;
  position: relative;
  transition: all 0.2s;
  margin: 0;
`;