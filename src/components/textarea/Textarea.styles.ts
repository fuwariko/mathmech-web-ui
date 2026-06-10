import styled from '@emotion/styled';
import { allColors, type TColors } from '../../theme/color-tokens.ts';

export const Textarea = styled.textarea<{ isError?: boolean; color: TColors }>`
    box-sizing: border-box;
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

    resize: vertical;
    min-height: 48px;
    padding: 14px 16px 12px;

  &:focus {
    border-color: ${props => allColors[props.color]};
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px ${props => `color-mix(in srgb, ${allColors[props.color]} 50%, transparent)`};
    outline: none;
  }

  /* некликабельное состояние */
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${({ isError }) => isError && `
    border-color: ${allColors.mainRed};
    
    &:focus {
      border-color: ${allColors.mainRed};
    }
      
    &:focus-visible {
      box-shadow: 0 0 0 2px color-mix(in srgb, ${allColors.mainRed} 70%, transparent);
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
    color: ${allColors.mainRed};
  }
`

export const ErrorSpan = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${allColors.mainRed};
  margin-top: 4px;
  overflow-wrap: break-word;
  word-break: break-word;
`
