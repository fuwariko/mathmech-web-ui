import styled from '@emotion/styled';

// Контейнер карточки
export const Wrapper = styled.div<{ selected?: boolean }>`
  position: relative;
  background: ${({ theme }) => theme.colors.bg};
  border: 1px solid ${({ theme, selected }) =>
    selected ? theme.colors.primary : theme.colors.border};
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  max-width: 420px;
  box-sizing: border-box;
  cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.08);
  }
`;

// Секции карточки
export const Header = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;
export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
`;
export const Description = styled.p`
  font-size: 14px;
  margin-top: 4px;
`;
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  font-size: 13px;
`;

// Слоты-уголки
const corner = `
  position: absolute;
`;
export const TopRight = styled.div`
  ${corner}
  top: 16px;
  right: 16px;
`;
export const BottomRight = styled.div`
  ${corner}
  bottom: 16px;
  right: 16px;
`;
