import React from 'react';
import * as S from './Header.styles';

type HeaderProps = {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
};

export const Header: React.FC<HeaderProps> = ({ left, center, right }) => (
  <S.Wrapper role="banner">
    <S.Section>{left}</S.Section>
    <S.Section>{center}</S.Section>
    <S.Section>{right}</S.Section>
  </S.Wrapper>
);
