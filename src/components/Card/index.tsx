import * as Styles from './styled'

interface CardProps {
  icon: JSX.Element
  text: string
}

const Card = ({ icon, text }: CardProps) => {
  return (
    <Styles.CardContainer>
      {icon}
      <Styles.Text>{text}</Styles.Text>
    </Styles.CardContainer>
  );
};

export default Card;
