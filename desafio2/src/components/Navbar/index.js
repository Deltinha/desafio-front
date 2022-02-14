import * as S from './style';
import logoImg from '../../assets/logo.svg';

export default function Navbar() {
  return (
    <S.Navbar>
      <S.Content>
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
          <S.Link href="#">ABOUT US</S.Link>
          <S.Link href="#">MODELS</S.Link>
          <S.Link href="#">GUARANTEE</S.Link>
        </S.LinksContainer>
      </S.Content>
    </S.Navbar>
  );
}
