import { BsThreeDotsVertical } from 'react-icons/bs';
import * as S from './style';
import logoImg from '../../assets/logo.svg';
import SideMenu from '../SideMenu';
import { useState } from 'react';
import useWindowSize from '../../hooks/useWindowsSize';

export default function Navbar() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const windowSize = useWindowSize();

  return (
    <S.Navbar>
      {windowSize.width <= 1024 && (
        <SideMenu isOpen={isSideMenuOpen} setIsOpen={setIsSideMenuOpen} />
      )}
      <S.Content>
        <S.SideMenuButton onClick={() => setIsSideMenuOpen(true)}>
          <BsThreeDotsVertical />
        </S.SideMenuButton>
        <S.LogoContainer>
          <a href="#">
            <S.LogoImg src={logoImg} />
          </a>
          <a href="#">
            <S.LogoText>
              <h1>zutterman</h1>
              <h2>Measure Tapes</h2>
            </S.LogoText>
          </a>
        </S.LogoContainer>
        <S.LinksContainer>
          <a href="#">ABOUT US</a>
          <a href="#">MODELS</a>
          <a href="#">GUARANTEE</a>
        </S.LinksContainer>
      </S.Content>
    </S.Navbar>
  );
}
