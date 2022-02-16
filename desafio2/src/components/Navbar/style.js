import styled from 'styled-components';
import Theme from '../../styles/Theme';

export const Navbar = styled.div`
  position: fixed;
  z-index: 1;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 110px;
  background-color: ${Theme.white};
  color: ${Theme.brown};
  a {
    text-decoration: none;
    color: ${Theme.brown};
  }

  @media (max-width: 1024px) {
    height: 57px;
  }
`;

export const Content = styled.div`
  padding-left: 55px;
  padding-right: 60px;
  box-sizing: border-box;
  max-width: 1440px;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const SideMenuButton = styled.div`
  display: none;
  pointer-events: none;
  cursor: default;

  @media (max-width: 1024px) {
    cursor: pointer;
    display: inherit;
    position: absolute;
    left: 2.8vw;
    font-size: 38px;
    color: #e2e0b8;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const LinksContainer = styled.div`
  min-width: 570px;
  font-size: 17px;
  letter-spacing: 5.5px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Link = styled.a`
  @media (max-width: 1024px) {
  }
`;

export const LogoImg = styled.img`
  width: 70px;
  @media (max-width: 1024px) {
    width: 40px;
  }
`;

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1,
  h2 {
    margin: 0;
  }
  h1 {
    font-weight: 700;
    font-size: 42px;
  }
  h2 {
    font-weight: 300;
    font-size: 16px;
    letter-spacing: 6px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
