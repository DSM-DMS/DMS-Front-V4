import * as React from 'react'

// import ModalCloseImg from '../../assets/icon/black-close-button.png';
// import BugIconImg from '../../assets/icon/bug.png';

import * as S from './style';

interface Props{
}

const BugReport: React.StatelessComponent<Props>=()=>{
  return(
    <>
       <S.ModalNameWrapper>
        <S.ModalName>
          <S.BugIcon/>
          버그신고
          </S.ModalName>
        <S.ModalClosebtn 
          src={ModalCloseImg}/>
      </S.ModalNameWrapper>
      <S.BugreportInput
       placeholder="버그신고 내용을 입력해주세요"/>

       <S.ModalSubmitBtn>신고하기</S.ModalSubmitBtn>
    </>
  );
}

export default BugReport;