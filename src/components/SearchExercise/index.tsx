import { Container } from '../Container';
import * as Styles from './styled'

const SearchExercise = () => {
  return (
    <Container>
      <Styles.ContainerSearchExercise>
        <Styles.Text>Find your exercises</Styles.Text>
        <Styles.InputContainer>
          <Styles.Input type="text" placeholder="Enter your exercise" />
          <Styles.Button>Search</Styles.Button>
        </Styles.InputContainer>
      </Styles.ContainerSearchExercise>
    </Container>
  );
};

export default SearchExercise;
