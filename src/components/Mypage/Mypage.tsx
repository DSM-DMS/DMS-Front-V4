import React from 'react';
import * as S from './styles';
import { MypagePeopleInfoContainer, MypagePointContainer, MypageApplyStateContainer } from '../../containers'

interface MypageProps {
}

const Mypage: React.FC<MypageProps> = () => {
  return (
  <S.MypageWrapper>
    <MypagePeopleInfoContainer />
    <MypagePointContainer />
    <MypageApplyStateContainer />
  </S.MypageWrapper>
  )
};

export default Mypage;
