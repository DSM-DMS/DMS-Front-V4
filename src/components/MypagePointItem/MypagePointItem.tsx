import React from 'react';
import * as S from './styles';

export interface MypagePointItemProps {
  isGoodPoint: boolean;
  point: number;
}

const MypagePointItem: React.FC<MypagePointItemProps> = ({isGoodPoint, point}) => {
  return (
  <div>
    <S.MypagePointTitle>{isGoodPoint ? 
    '상점 : ' + point: '벌점 : ' + point}</S.MypagePointTitle>
    <S.MypagePointBar>
      <S.MypageCurrentPointBar point={point}/>
    </S.MypagePointBar>
  </div>
  );
};

export default MypagePointItem;
