import * as React from 'react';
import * as S from './style';
import { ModalWrapper, ModalButton, ModalInput } from '../../../components';
import { ModalWrapperContainer } from '../../../containers';
interface Props {}

const ChangePW: React.StatelessComponent<Props> = () => {
  return (
    <ModalWrapperContainer modalName="비밀번호 변경">
      <S.FindPWContentWrapper>
        <ModalInput placeholder="현재 비밀번호" inputType="password" />
        <ModalInput placeholder="새로운 비밀번호" inputType="password" />
        <ModalInput placeholder="비밀번호 확인" inputType="password" />
      </S.FindPWContentWrapper>
      <ModalButton buttonName="비밀번호 변경" />
    </ModalWrapperContainer>
  );
};

export default ChangePW;
