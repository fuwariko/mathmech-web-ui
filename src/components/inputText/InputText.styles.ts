import styled from '@emotion/styled';

export const Input = styled.input<{
  isError?: boolean;
  $focusColor: string;
  $errorColor: string;
  $textColor: string;
  $backgroundColor: string;
}>`
    height: 48px;
    box-sizing: border-box;
    padding: 14px 16px;
    border-radius: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: ${props => props.$textColor};
    background-color: ${props => props.$backgroundColor};
    width: 100%;
    transition-property: color, background-color, border-color, background-image;
    transition-duration: .15s;
    transition-timing-function: ease-in-out;
    border: 1px solid var(--mm-mainGrey, #D3D3D3);

  &:focus {
    border-color: ${props => props.$focusColor};
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px ${props => `color-mix(in srgb, ${props.$focusColor} 50%, transparent)`};
    outline: none;
  }

  /* некликабельное состояние */
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ isError }) => isError && `
    border-color: var(--mm-error, #D41926);
    
    &:focus {
      border-color: var(--mm-error, #D41926);
    }
      
    &:focus-visible {
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--mm-error, #D41926) 70%, transparent);
    }
  `}
`;

export const TextLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: max-width;
`

export const DescriptionSpan = styled.span<{ $errorColor: string }>`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 6px;
  overflow-wrap: break-word;
  word-break: break-word;
  
  & span {
    color: ${props => props.$errorColor};
  }
`

export const ErrorSpan = styled.span<{ $errorColor: string }>`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.$errorColor};
  margin-top: 4px;
  overflow-wrap: break-word;
  word-break: break-word;
`
