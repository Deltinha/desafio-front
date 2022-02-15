import styled from 'styled-components';
import Theme from '../../styles/Theme';

export const Landing = styled.div`
  > div {
    height: 100vh;
  }

  @media (max-width: 1024px) {
    > div {
      height: 570px;
    }
  }
`;

export const FirstSection = styled.div`
  box-sizing: border-box;
  padding-left: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Theme.background};
  position: relative;
  gap: 30px;

  img {
    width: 682px;
    object-fit: contain;
  }

  h1 {
    font-weight: 700;
    font-size: 82.5px;
    color: ${Theme.grey};
  }

  @media (max-width: 1024px) {
    padding-left: 0;
    flex-direction: column;
    img {
      width: calc(100vw - 40%);
      min-width: 285px;
    }

    h1 {
      font-size: 41px;
    }
  }
`;

export const SecondSection = styled.div`
  box-sizing: border-box;
  background-color: ${Theme.blue};
  position: relative;
  overflow: hidden;

  > div {
    position: absolute;
    top: 260px;
    left: calc((100vw - 1440px) / 2 + 50px);
  }

  img {
    width: 1040px;
    object-fit: contain;
    position: absolute;
    mix-blend-mode: multiply;
    right: 0;
    top: 130px;
  }

  h1 {
    font-weight: 700;
    font-size: 70px;
    color: ${Theme.white};
  }

  h2 {
    font-weight: 300;
    font-size: 48px;
    color: ${Theme.white};
  }

  @media (max-width: 1440px) {
    > div {
      left: 14px;
    }
  }

  @media (max-width: 1024px) {
    > div {
      // left: 0px;
      top: 100px;
    }

    img {
      width: calc(100vw - 40%);
      top: auto;
      bottom: 10px;
    }

    h1 {
      font-size: 41px;
    }

    h2 {
      font-size: 26px;
    }
  }
`;
