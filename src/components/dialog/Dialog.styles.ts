import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(15, 23, 42, 0.5);
  display: grid;
  place-items: center;
  padding: 24px;
`;

export const Dialog = styled.div`
  width: min(100%, 560px);
  max-height: min(90vh, 720px);
  overflow: auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 24px 80px rgba(15, 23, 42, 0.22);
  outline: none;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px 0;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  line-height: 1.2;
`;

export const CloseButton = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 8px 12px;
`;

export const Body = styled.div`
  padding: 24px;
`;