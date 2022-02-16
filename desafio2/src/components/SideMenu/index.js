import * as S from './style';
import { IoClose } from 'react-icons/io5';
import { useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';

export default function SideMenu({ isOpen, setIsOpen }) {
  const menuRef = useRef();
  useOnClickOutside(menuRef, () => setIsOpen(false));

  return (
    <S.MenuBackground isOpen={isOpen}>
      <S.Menu ref={menuRef}>
        <S.CloseButton>
          <IoClose onClick={() => setIsOpen(false)} />
        </S.CloseButton>
        <a href="#">ABOUT US</a>
        <a href="#">MODELS</a>
        <a href="#">GUARANTEE</a>
      </S.Menu>
    </S.MenuBackground>
  );
}
