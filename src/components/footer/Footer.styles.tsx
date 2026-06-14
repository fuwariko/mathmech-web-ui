import styled from '@emotion/styled';

export const Wrapper = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: var(--mm-backgroundSecondary, #F2EFFD);
  border-top: 1px solid var(--mm-mainGrey, #C6C1DA);
  color: var(--mm-textPrimary, #1B1E22);

  font-size: 14px;
  text-align: center;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 8px;
  }
`;
