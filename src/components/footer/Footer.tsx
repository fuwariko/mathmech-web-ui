import React from 'react';
import * as S from './Footer.styles';

type FooterProps = {
  left?: React.ReactNode;
  right?: React.ReactNode;
};

export const Footer: React.FC<FooterProps> = ({ left, right }) => (
  <S.Wrapper role="contentinfo">
    <div>{left}</div>
    <div>{right}</div>
  </S.Wrapper>
);
