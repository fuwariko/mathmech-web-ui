import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StarsRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const StarContainer = styled.div<{ size: number }>`
  position: relative;
  display: inline-flex;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  align-items: center;
  justify-content: center;
`;

export const StarFill = styled.span<{ fillPercent: number }>`
  position: absolute;
  inset: 0;
  display: inline-flex;
  overflow: hidden;
  width: ${props => props.fillPercent}%;
  pointer-events: none;
`;
