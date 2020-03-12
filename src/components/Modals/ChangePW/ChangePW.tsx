import * as React from 'react';
import * as S from './style';
import ModalWrapper from '../ModalWrapper';
import ModalButton from '../ModalButton';
import ModalInput from '../ModalInput';

interface Props {}

const ChangePW: React.StatelessComponent<Props> = () => {
  return (
    <ModalWrapper modalName="비밀번호 변경">
      <S.FindPWContentWrapper>
        <ModalInput placeholder="현재 비밀번호" inputType="password" />
        <ModalInput placeholder="새로운 비밀번호" inputType="password" />
        <ModalInput placeholder="비밀번호 확인" inputType="password" />
      </S.FindPWContentWrapper>
      <ModalButton buttonName="비밀번호 변경" />
    </ModalWrapper>
  );
};

export default ChangePW;
