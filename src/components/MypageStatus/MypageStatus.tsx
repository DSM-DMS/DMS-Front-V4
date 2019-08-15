import React from 'react';
import * as S from './styles';

interface MypageStatusProps {
  setPointPage: (isPointPage: boolean) => void;
}

const MypageStatus: React.FC<MypageStatusProps> = ({ setPointPage }) => {
  return (
    <S.MypageStatusWrapper>
      <S.MypageStatusToPoint onClick={() => setPointPage(true)}>

        상점 : 18점&nbsp;&nbsp;&nbsp;벌점 : 1점
      </S.MypageStatusToPoint>
      <S.MypageStatusItem>토요귀가</S.MypageStatusItem>
      <S.MypageStatusItem>11시 : 가온실 | 12시 : 가온실</S.MypageStatusItem>
      <S.MypageStatusItem>토요일 : 신청 | 일요일 : 미신청</S.MypageStatusItem>

      <S.MypageStatusBottom>
        <S.MypageStatusBottomButton>비밀번호 변경</S.MypageStatusBottomButton>
        {' '}
|
        {' '}
        <S.MypageStatusBottomButton>로그아웃</S.MypageStatusBottomButton>
      </S.MypageStatusBottom>
    </S.MypageStatusWrapper>
  );
};

export default MypageStatus;
