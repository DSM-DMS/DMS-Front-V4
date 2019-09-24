import React from 'react';
import * as S from './styles';

interface MypageApplyStateProps {}

const MypageApplyState: React.StatelessComponent<MypageApplyStateProps> = ({}) => {
    return <S.MypageApplyStateWrapper>
        <S.MypageApplyStateTitle>신청현황</S.MypageApplyStateTitle>
        <S.MypageApplyStateListWrapper>123</S.MypageApplyStateListWrapper>
    </S.MypageApplyStateWrapper>
}

export default MypageApplyState;