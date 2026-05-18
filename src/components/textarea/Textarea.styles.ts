import styled from '@emotion/styled';

export const Textarea = styled.textarea<{ isError?: boolean }>`
    box-sizing: border-box;
    border-radius: 10px;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #222;
    background-color: #fff;
    width: 100%;
    transition-property: color, background-color, border-color, background-image;
    transition-duration: .15s;
    transition-timing-function: ease-in-out;
    border: 1px solid #D3D3D3;

    resize: vertical;
    min-height: 48px;
    padding: 14px 16px 12px;

  &:focus {
    border-color: #1E4391;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px #1e429179;
    outline: none;
  }

  /* некликабельное состояние */
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ isError }) => isError && `
    border-color: #D41926;
    
    &:focus {
      border-color: #D41926;
    }
      
    &:focus-visible {
      box-shadow: 0 0 0 2px #d41925b0;
    }
  `}
`;

export const TextLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: max-width;
`

export const DescriptionSpan = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 6px;
  overflow-wrap: break-word;
  word-break: break-word;
  
  & span {
    color: #D41926;
  }
`

export const ErrorSpan = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #D41926;
  margin-top: 4px;
  overflow-wrap: break-word;
  word-break: break-word;
`