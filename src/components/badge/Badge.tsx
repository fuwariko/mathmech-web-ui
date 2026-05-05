import styled from '@emotion/styled';
import type { ReactElement } from 'react';
import { BadgeColors } from '../../theme/theme';

interface IBadgeProps {
  /** Текст внутри беджа */
  lable: string;
  /** Иконка слева */
  icon?: ReactElement;
  /** Размер */
  size?: 'small' | 'medium' | 'large';
  /** Цвет */
  color?: 'default' | 'warning' | 'success' | 'danger';
}

export const Badge = ({
  lable,
  icon,
  size = 'small',
  color = 'default',
}: IBadgeProps) => {
  return (
    <Wrapper size={size} color={color}>
      {icon && <IconWrapper>{icon}</IconWrapper>}
      <span>{lable}</span>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ size: string; color: 'default' | 'warning' | 'success' | 'danger' }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;

  border-radius: 999px;

  font-size: ${({ size }) =>
    size === 'small' ? '12px' :
    size === 'medium' ? '14px' :
    '16px'};

  padding: ${({ size }) =>
    size === 'small' ? '4px 10px' :
    size === 'medium' ? '6px 12px' :
    '8px 14px'};

  background: ${({ color }) => BadgeColors[color]};

  color: '#111827';
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
`;