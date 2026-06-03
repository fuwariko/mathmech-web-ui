import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const StarsYes = styled.div<{ isSmall?: boolean, rating: number }>`
  position: absolute;
  overflow: hidden;
  display: flex;
  flex-wrap: nowrap;
  font-size: 35px;
   width: ${props => props.rating * (props.isSmall ? 15 : 35)}px;
`;

export const StarsNo = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  width: 175px;
  height: auto;
  overflow: hidden;
`;

export const StarContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  height: auto;
  align-items: center;
`;

export const Star = styled.img<{ isSmall?: boolean }>`
  width: ${props => props.isSmall ? 15 : 35}px;
  height: ${props => props.isSmall ? 15 : 35}px;
  object-fit: cover;
`;