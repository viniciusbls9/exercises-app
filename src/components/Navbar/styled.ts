import styled from 'styled-components';
import Link from 'next/link'

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  background-color: #f0f0f0;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1460px;
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

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: #000;
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
  }

  &:hover {
    border-bottom: 2px solid #000;
  }
`;