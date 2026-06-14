// import  from '@emotion/styled';
import styled, { css } from 'styled-components';


export const Root = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  gap: 6px;
  border: none;
`;

export const Label = styled.label`
  color: var(--mm-textPrimary, #000);
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 6px;
  overflow-wrap: break-word;
  word-break: break-word;

  & span {
    color: var(--mm-error, #D41926);
  }; 
`;

export const Control = styled.button<{ isError?: boolean }>`
  width: 100%;
  height: 48px;
  padding: 14px 16px;
  border: 1px solid var(--mm-mainGrey, #D3D3D3);
  border-radius: 10px;
  background: var(--mm-backgroundPrimary, #fff);
  color: var(--mm-textPrimary, #222);
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;

  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus {
    border-color: var(--mm-globalBlue, #1E4391);
  }
  
  &:focus-visible {
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--mm-globalBlue, #1E4391) 50%, transparent);
    outline: none;
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

export const Value = styled.span<{ $isPlaceholder: boolean }>`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${(p) =>
    p.$isPlaceholder &&
    css`
      color: var(--mm-textSecondary, #222);
    `}
`;

export const Icon = styled.div<{ $isOpen: boolean }>`
  height: 12px;
  width: 12px;
  margin-bottom: 3px;
  ${(p) =>
    p.$isOpen &&
    css`
      transform: rotate(180deg);
      margin-bottom: 0;
      margin-top: 3px;
    `}
`;

export const Listbox = styled.ul`
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  z-index: 10;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid var(--mm-mainGrey, #cbd5e1);
  border-radius: 10px;
  background: var(--mm-backgroundPrimary, #fff);
  box-sizing: border-box;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.12);
  max-height: 195px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 10px;
    background-color: transparent;
  }
    &::-webkit-scrollbar-thumb {
    background-clip: content-box;
    border: 2px solid transparent;
    background-color: var(--mm-mainGrey, #d3d3d3);
    border-radius: 10px;
  }
`;

export const Option = styled.li<{ $active: boolean; $selected: boolean }>`
  width: 100%;
  border: 0;
  background: transparent;
  color: var(--mm-textPrimary, #000);
  text-align: left;
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  box-sizing: border-box;
  min-height: 48px;
  height: 100%;
  background-color: var(--mm-backgroundPrimary, #fff);
  border: 1px solid transparent;
  border-bottom: 1px solid var(--mm-mainGrey, #CAD1E1);
  padding: 13px 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  

    ${(p) =>
    p.$active &&
    css`
      background: var(--mm-backgroundSecondary, #eff6ff);
      border: 1px solid var(--mm-globalBlue, #1E4391);
    `}

  ${(p) =>
    p.$selected &&
    css`
      font-weight: 600;
    `}

  &:disabled {
    color: var(--mm-textTertiary, #9ca3af);
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid var(--mm-globalBlue, #2563eb);
    outline-offset: 2px;
  }
`;

export const Error = styled.div`
  position: absolute;
  font-size: 14px;
  font-weight: 600;
  color: var(--mm-error, #D41926);
  top: 90px;
  overflow-wrap: break-word;
  word-break: break-word;
`;
