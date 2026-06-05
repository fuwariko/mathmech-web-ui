import styled from 'styled-components';
import Cansel from '../../assets/remove.svg?raw';
import { сolors } from '../../theme/tokens.ts';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(15, 23, 42, 0.5);
  display: grid;
  place-items: center;
  padding: 24px;
`;

export const Dialog = styled.dialog`
  border: none;
  border-radius: 10px;
  position: relative;
  background-color: #fff;
  width: min(100%, 560px);
  max-height: min(90vh, 720px);
  box-shadow: 0 24px 80px rgba(15, 23, 42, 0.22);
  padding: 40px 32px;
  overflow: visible;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding-bottom: 20px;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const CloseButton = styled.button`
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
`;

export const Body = styled.div`
`;
