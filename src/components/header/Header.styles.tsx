import styled from '@emotion/styled';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  padding: 0 24px;
  background: ${({ theme }) => theme.colors.bg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    flex-direction: column;
    height: auto;
    padding: 12px;
  }
`;
export const Section = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
