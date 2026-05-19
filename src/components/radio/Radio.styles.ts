import styled from '@emotion/styled';

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked + span {
    border-color: #1E4391;
    background-color: #fff;
  }
  &:checked + span::before {
    content: '';
    width: 9px;
    height: 9px;
    background-color: #1E4391;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &:focus + span {
    box-shadow: 0 0 0 2px #1e429179;
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
  font-family: 'Montserrat', sans-serif;

  &:has(input:disabled) {
    cursor: not-allowed;
  }
`;
export const Span = styled.span`
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border: 1px solid #d3d3d3;
  border-radius: 50%;
  position: relative;
  transition: all 0.2s;
  margin: 0;
`;