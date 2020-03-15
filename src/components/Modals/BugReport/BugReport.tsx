import * as React from 'react';
import * as S from './style';
import { ModalWrapper, ModalButton } from '../../../components';
import { ModalWrapperContainer } from '../../../containers';

interface Props {}

const BugReport: React.StatelessComponent<Props> = () => {
  return (
    <ModalWrapperContainer modalName="버그신고">
      <S.BugreportInput placeholder="버그신고 내용을 입력해주세요" />
      <ModalButton buttonName="신고하기" />
    </ModalWrapperContainer>
  );
};

export default BugReport;
