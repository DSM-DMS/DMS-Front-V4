import * as React from 'react';
import * as S from './style';
import ModalWrapper from '../ModalWrapper';
import ModalButton from '../ModalButton';

interface Props {}

const BugReport: React.StatelessComponent<Props> = () => {
  return (
    <ModalWrapper modalName="버그신고">
      <S.BugreportInput placeholder="버그신고 내용을 입력해주세요" />
      <ModalButton buttonName="신고하기" />
    </ModalWrapper>
  );
};

export default BugReport;
