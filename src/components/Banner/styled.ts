import styled from 'styled-components';

export const BannerContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* Aspect ratio of 16:9 */

  @media (max-width: 768px) {
    padding-bottom: 75%; /* Aspect ratio of 4:3 */
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/young-fitness-man-studio.jpg');
  background-size: cover;
  background-position: center;
`;

export const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
`;

export const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Subtitle = styled.p`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;