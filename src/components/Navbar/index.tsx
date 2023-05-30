import React from 'react';
import * as Styles from './styled'

const Menu = () => {
  return (
    <Styles.Menu>
      <Styles.MenuContainer>
        <Styles.Logo src="/logo.png" alt="Logo" />
        <Styles.LinksContainer>
          <Styles.Anchor href="#">
            Home
          </Styles.Anchor>
          <Styles.Anchor href="#">
            Exercises
          </Styles.Anchor>
        </Styles.LinksContainer>
      </Styles.MenuContainer>
    </Styles.Menu>
  );
};

export default Menu;
