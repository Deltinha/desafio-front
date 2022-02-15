import styled from 'styled-components';
import Theme from '../../styles/Theme';

export const Footer = styled.footer`
  box-sizing: border-box;
  padding-top: 47px;
  padding-left: calc((100vw - 1440px) / 2 + 50px);
  height: 226px;
  display: flex;
  gap: 260px;
  @media (max-width: 1440px) {
    padding-left: 14px;
    height: 334px;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 0;
    align-items: center;
    gap: 43px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: ${Theme.grey};
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 27px;
  @media (max-width: 1440px) {
    text-align: center;
  }
`;

export const Text = styled.span`
  font-size: 16px;
  @media (max-width: 1440px) {
    text-align: center;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 22px;
`;

export const IconCircle = styled.div`
  background-color: ${Theme.grey};
  width: 42px;
  height: 42px;
  border-radius: 50%;
  position: relative;

  > div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 38px;
    height: 38px;
    background-color: ${Theme.background};
  }

  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
  }
`;
