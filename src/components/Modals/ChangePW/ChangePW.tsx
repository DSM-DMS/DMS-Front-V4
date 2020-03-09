import * as React from 'react';
import ModalCloseImg from '../../assets/icon/black-close-button.png';
import * as S from '../style';

interface Props {}

const ChangePW: React.StatelessComponent<Props> = () => {
  return (
    <>
      <S.ModalNameWrapper>
        <S.ModalName>비밀번호 변경</S.ModalName>
        <S.ModalClosebtn src={ModalCloseImg} />
      </S.ModalNameWrapper>
      <S.FindPWContentWrapper>
        <S.ModalInput placeholder="현재 비밀번호" type="password" />
        <S.ModalInput placeholder="새로운 비밀번호" type="password" />
        <S.ModalInput placeholder="비밀번호 확인" type="password" />
      </S.FindPWContentWrapper>
      <S.ModalSubmitBtn>회원가입</S.ModalSubmitBtn>
    </>
  );
};

export default ChangePW;
