import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  width: 100%;
`;

export const CarouselContent = styled.div`
  display: flex;
  width: fit-content;
  scroll-snap-align: start;
`;

export const ArrowsContainer = styled.div`
  display: flex;
  gap: 20px;
`