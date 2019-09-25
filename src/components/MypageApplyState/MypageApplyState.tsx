import React from 'react';
import * as S from './styles';

interface MypageApplyStateProps {
  mypageApplyStateCardList: React.ReactNode
}

const MypageApplyState: React.StatelessComponent<MypageApplyStateProps> = ({mypageApplyStateCardList}) => {
  return (
  <S.MypageApplyStateWrapper>
    <S.MypageApplyStateTitle>신청현황</S.MypageApplyStateTitle>
    <S.MypageApplyStateListWrapper>{mypageApplyStateCardList}</S.MypageApplyStateListWrapper>
  </S.MypageApplyStateWrapper>
  )
}

export default MypageApplyState;