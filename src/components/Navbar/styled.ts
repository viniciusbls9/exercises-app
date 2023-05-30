import styled from 'styled-components';
import Link from 'next/link'

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
  background-color: #f0f0f0;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const Logo = styled.img`
  height: 30px;
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Anchor = styled(Link)`
  margin-left: 20px;
  text-decoration: none;
  color: #000;
  position: relative;
  transition: all 0.2s ease-in-out;

  &:hover {
    border-bottom: 2px solid #000;
  }
`;