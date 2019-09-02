import * as React from 'react';
import * as S from './style'
import ModalCloseImg from '../../assets/icon/blue_close-mark.png';
import Login from "./Login";


interface Props {
}

const Modal: React.FC<Props> = () => {
  return(
    <div>
        <S.ModalContainer>
          <Login />
        </S.ModalContainer>
        
    </div>
  )
}

export default Modal;