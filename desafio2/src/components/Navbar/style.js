import styled from 'styled-components';
import Theme from '../../styles/Theme';

export const Navbar = styled.div`
  width: 100vw;
  height: 110px;
  background-color: ${Theme.white};
  color: ${Theme.brown};
  a {
    text-decoration: none;
    color: ${Theme.brown};
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
`;

export const Link = styled.a``;

export const LogoImg = styled.img`
  width: 70px;
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
`;
