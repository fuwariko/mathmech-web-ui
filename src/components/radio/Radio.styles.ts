import styled from '@emotion/styled';

export const Input = styled.input<{ $color: string; $backgroundColor: string }>`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked + span {
    border-color: ${props => props.$color};
    background-color: ${props => props.$backgroundColor};
  }
  &:checked + span::before {
    content: '';
    width: 9px;
    height: 9px;
    background-color: ${props => props.$color};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:focus + span {
    box-shadow: 0 0 0 2px ${props => `color-mix(in srgb, ${props.$color} 50%, transparent)`};
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
  border: 1px solid var(--mm-mainGrey, #d3d3d3);
  border-radius: 50%;
  position: relative;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease,
    opacity 0.2s ease;
  margin: 0;
`;
