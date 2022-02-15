import * as S from './style';
import { ImYoutube, ImTwitter, ImFacebook } from 'react-icons/im';

function IconCircle({ children }) {
  return (
    <S.IconCircle>
      <div>{children}</div>
    </S.IconCircle>
  );
}

export default function Footer() {
  return (
    <S.Footer>
      <S.Section>
        <S.Title>Follow Us</S.Title>
        <S.IconsContainer>
          <IconCircle>
            <ImYoutube />
          </IconCircle>

          <IconCircle>
            <ImFacebook />
          </IconCircle>

          <IconCircle>
            <ImTwitter />
          </IconCircle>
        </S.IconsContainer>
      </S.Section>

      <S.Section>
        <S.Title>Contact</S.Title>

        <S.Text>
          2490 Leisure Lane
          <br />
          San Luis Obispo
          <br />
          California
        </S.Text>
      </S.Section>
    </S.Footer>
  );
}
