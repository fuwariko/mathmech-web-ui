import styled from '@emotion/styled';
import { allColors } from '../../theme/color-tokens';

export const Wrapper = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: ${allColors.lightGrey02};
  border-top: 1px solid ${allColors.mainGrey};

  font-size: 14px;
  text-align: center;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 8px;
  }
`;
