import styled from '@emotion/styled';
import { сolors, type TColors } from '../../theme/tokens.ts';

export const Input = styled.input<{ isError?: boolean; color: TColors }>`
    height: 48px;
    box-sizing: border-box;
    padding: 14px 16px;
    border-radius: 10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #222;
    background-color: #fff;
    width: 100%;
    transition-property: color, background-color, border-color, background-image;
    transition-duration: .15s;
    transition-timing-function: ease-in-out;
    border: 1px solid #D3D3D3;

  &:focus {
    border-color: ${props => сolors[props.color]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px ${props => сolors[props.color]+ '80'};
    outline: none;
  }

  /* некликабельное состояние */
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ isError }) => isError && `
    border-color: ${сolors.mainRed};
    
    &:focus {
      border-color: ${сolors.mainRed};
    }
      
    &:focus-visible {
      box-shadow: 0 0 0 2px ${сolors.mainRed + 'b0'};
    }
  `}
`;

export const TextLabel = styled.label`
  display: flex;
  flex-direction: column;
  width: max-width;
`

export const DescriptionSpan = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 6px;
  overflow-wrap: break-word;
  word-break: break-word;
  
  & span {
    color: ${сolors.mainRed};
  }
`

export const ErrorSpan = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${сolors.mainRed};
  margin-top: 4px;
  overflow-wrap: break-word;
  word-break: break-word;
`