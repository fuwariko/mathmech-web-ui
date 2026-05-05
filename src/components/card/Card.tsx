import React from 'react';
import * as S from './Card.styles';

type CardProps = {
  header?: React.ReactNode;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  topRight?: React.ReactNode;
  bottomRight?: React.ReactNode;
  selected?: boolean;
  onSelect?: () => void;
};

export const Card: React.FC<CardProps> = ({
  header,
  title,
  description,
  footer,
  topRight,
  bottomRight,
  selected = false,
  onSelect,
}) => {
  // Обработчик клавиатуры: Enter = click
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onSelect && (e.key === 'Enter' || e.key === ' ')) {
      onSelect();
    }
  };

  return (
    <S.Wrapper
      selected={selected}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      tabIndex={onSelect ? 0 : -1}
      role={onSelect ? 'button' : undefined}
      aria-pressed={selected}
    >
      {topRight && <S.TopRight>{topRight}</S.TopRight>}
      {bottomRight && <S.BottomRight>{bottomRight}</S.BottomRight>}

      {header && <S.Header>{header}</S.Header>}

      <div style={{ marginTop: header ? 12 : 0 }}>
        {title && <S.Title>{title}</S.Title>}
        {description && <S.Description>{description}</S.Description>}
      </div>

      {footer && <S.Footer>{footer}</S.Footer>}
    </S.Wrapper>
  );
};
