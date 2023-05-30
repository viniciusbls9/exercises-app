import React, { ReactNode } from 'react';
import * as Styles from './styles'

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
