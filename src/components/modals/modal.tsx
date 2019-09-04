import * as React from 'react';
import * as S from './style'
import ModalCloseImg from '../../assets/icon/blue_close-mark.png';
import Login from "./Login";


interface Props {
}

const Modal: React.FC<Props> = () => {
  return(
    <>
      <S.ModalOverlay/>
      <S.ModalContainer>
        <Login />
      </S.ModalContainer>
    </>
  )
}

export default Modal;