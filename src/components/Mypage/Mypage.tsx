import React from 'react';
import { MypageStatus } from '..';
import * as S from './styles';

interface MypageProps {
  isPointPage: boolean;
  setPointPage: (isPointPage: boolean) => void;
}

const Mypage: React.FC<MypageProps> = ({ isPointPage, setPointPage }) => {
  return (
    <>
      <S.MypagePersonalDataWrapper>
        <S.MypagePersonalDataName>정지우</S.MypagePersonalDataName>
        <S.MypagePersonalDataNumber>3학년 4반 17번</S.MypagePersonalDataNumber>
      </S.MypagePersonalDataWrapper>
      {isPointPage ? null : <MypageStatus setPointPage={setPointPage} />}
    </>
  );
};

export default Mypage;
