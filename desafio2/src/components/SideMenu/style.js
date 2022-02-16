import styled from 'styled-components';
import Theme from '../../styles/Theme';

export const MenuBackground = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 2;
  position: fixed;
  background: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
`;

export const Menu = styled.div`
  width: 200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  padding-top: 70px;
  background-color: ${Theme.white};
  position: relative;
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 38px;
  cursor: pointer;
`;
