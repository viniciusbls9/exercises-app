import * as Styles from './styled'

const Banner = () => {
  return (
    <Styles.BannerContainer>
      <Styles.BackgroundImage />
      <Styles.TextOverlay>
        <Styles.Title>Find your favorite exercises</Styles.Title>
        <Styles.Subtitle>Discover amazing content and more</Styles.Subtitle>
      </Styles.TextOverlay>
    </Styles.BannerContainer>
  );
};

export default Banner;
