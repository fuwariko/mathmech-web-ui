import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StarsWrapper = styled.fieldset<{ isError?: boolean }>`
  display: flex;
  justify-content: center;
  gap: 6px;
  padding: 0;
  border: none;
  margin: 0 0 10px 0;

  ${({ isError }) =>
    isError
      ? `
        border: 2px solid #D41926;
      `
      : ''}
`;

export const Input = styled.input`
  position: absolute;
  cursor: pointer;
  opacity: 0;

  &:focus + div span {
    opacity: 1;
    transform: scale(1);
  }
`;

export const FocusSpan = styled.span`
  position: absolute;
  inset: -8px;
  width: calc(100% + 16px);
  height: calc(100% + 16px);
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 165, 0, 0.6) 0%,
    rgba(255, 165, 0, 0.3) 40%,
    rgba(255, 165, 0, 0) 70%
  );
  opacity: 0;
  transform: scale(0.6);
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: none;
  z-index: -1;
  }
`;

export const StarWrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    height: auto;
    align-items: center;
    cursor: pointer;
    aria-hidden="true";

  & img {
    width: 60px;
    height: 60px;
    // aria-hidden="true";
    alt="Звезда";
    role="none";
  }
`;

export const ErrorMassage = styled.span`
  font-family: 'Montserrat', sans-serif;
  color: #D41926;
  font-weight: bolder;
  font-size: 24px;
`;
