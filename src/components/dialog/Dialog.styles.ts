import styled, { css } from 'styled-components';
import Cansel from '../../assets/remove.svg?raw';
import { сolors } from '../../theme/tokens.ts';

export const Dialog = styled.dialog <{ $isMobile?: boolean }>`
  border: none;
  border-radius: 10px;
  background-color: #fff;
  width: min(100%, 560px);
  max-height: min(90vh, 720px);
  box-shadow: 0 24px 80px rgba(15, 23, 42, 0.22);
  padding: 40px 32px;
  overflow: visible;

  ${(p) =>
    p.$isMobile &&
    css`
      width: 85%;
      max-height: 85%;
      padding: 40px 16px;
    `}
`;

export const Header = styled.div <{ $isMobile?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding-bottom: 20px;
  ${(p) =>
    p.$isMobile &&
    css`
      padding: 20px 0;
    `}
`;

export const Title = styled.h1 <{ $isMobile?: boolean }>`
  margin: 0;
  text-align: center;

  ${(p) =>
    p.$isMobile &&
    css`
      font-size: 24px;
    `}
`;

export const CloseButton = styled.button <{ $isMobile?: boolean }>`
  position: absolute; 
  top: 0;
  right: -60px;        
  border: 0;
  background: #fff;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.15);
  
  &:hover {
    background: #f1f5f9;
  }
  
  &:focus {
    outline: 2px solid ${сolors.mainNavy};
    outline-offset: 2px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 13px;
    height: 13px;
    background-image: url("data:image/svg+xml,${encodeURIComponent(Cansel)}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }

    ${(p) =>
    p.$isMobile &&
    css`
      top: 16px;
      right: 16px;   
      width: 30px;
      height: 30px;
    `}
`;

export const Body = styled.div<{ $isMobile?: boolean }>`
  height: 100%;
  width: 100%;
  overflow-Y: auto;
  max-height: calc(
    min(90vh, 720px) -
    100px
  ); /* max-height Dialog - padding - Header padding-bottom */

  ${(p) =>
    p.$isMobile &&
    css`
    max-height: calc(
      min(90vh, 720px) -
      130px
    );
    `}
`;
