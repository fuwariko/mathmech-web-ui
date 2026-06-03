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
  color: #000;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 6px;
  overflow-wrap: break-word;
  word-break: break-word;

  & span {
    color: #D41926;
  }; 
`;

export const Control = styled.button<{ isError?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  width: 100%;
  height: 48px;
  padding: 8px 16px;
  border: 1px solid #D3D3D3;
  border-radius: 10px;
  background: #fff;
  color: #222;
  font-size: 14px;
  justify-content: space-between;
  cursor: pointer;

  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:focus {
    border-color: #1E4391;
  }
  
  &:focus-visible {
    box-shadow: 0 0 0 2px #1e429179;
    outline: none;
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

export const Value = styled.span<{ $isPlaceholder: boolean }>`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${(p) =>
    p.$isPlaceholder &&
    css`
      color: #222;
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
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  background: #fff;
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
    background-color: #d3d3d3;
    border-radius: 10px;
  }
`;

export const Option = styled.li<{ $active: boolean; $selected: boolean }>`
  display: flex;
  z-index: 1;
  width: 100%;
  border: 0;
  background: transparent;
  color: #000;
  text-align: left;
  cursor: pointer;
  box-sizing: border-box;
  min-height: 48px;
  height: 100%;
  background-color: #fff;
  border: 1px solid transparent;
  border-bottom: 1px solid #CAD1E1;
  padding: 13px 16px;
  padding-left: 40px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  & img {
    margin-right: 8px;
  }

  // & label input {
  //   backgroud-color: black;
  //   pointer-events: none;
  // }

  ${(p) =>
    p.$active &&
    css`
      background: #eff6ff;
      border: 1px solid #1E4391;
    `}

  ${(p) =>
    p.$selected &&
    css`
      font-weight: 600;
      padding-left: 16px;
    `}

  &:disabled {
    color: #9ca3af;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid #1E4391;
    outline-offset: 2px;
  }
`;

export const Error = styled.div`
  position: absolute;
  font-size: 14px;
  font-weight: 600;
  color: #D41926;
  top: 90px;
  overflow-wrap: break-word;
  word-break: break-word;
`;

export const ValueContainer = styled.ul`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  min-width: 0;
  max-width: 100%;
  gap: 4px;
  padding: 0;
  margin: 0;

  overflow-x: auto;
  overflow-y: hidden;
  flex-wrap: nowrap;
  white-space: nowrap;

  &::-webkit-scrollbar {
    height: 7px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-clip: content-box;
    border: 2px solid transparent;
    background-color: #d3d3d3;
    border-radius: 10px;
  }
`;

export const Tag = styled.li`
  gap: 10px;
  color: #222;
  display: flex;
  font-weight: 400;
  font-size: 12px;
  line-height: 16.8px;
  background-color: #e7f2ff;
  padding: 8px 12px;
  margin: 2px;
  height: 33px;
  border-radius: 8px;
  box-sizing: border-box;
  
  &:focus-visible {
    outline: 1px solid #1E4391;
    box-shadow: 0 0 0 2px #1e429179;
    outline-offset: 1px;
  }
`;

export const TagClose = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  padding: 1px;
  font-size: 12px;
  line-height: 1;
  transition: background 0.2s;
  background: transparent;

  &[disabled] {
    cursor: not-allowed;
  }

  &:hover {
    background: #1e429113;
  }

  &[disabled]:hover {
    background: transparent;
  }

  &:focus-visible {
    outline: 1px solid #1E4391;
    box-shadow: 0 0 0 2px #1e429179;
    outline-offset: 1px;
  }

  img {
    width: 10px;
    height: 10px;
  }
`;