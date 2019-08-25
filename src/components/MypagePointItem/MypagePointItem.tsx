import React from 'react';
import * as S from './styles';

export interface MypagePointItemProps {
  isGood: boolean;
  point: Number;
  reason: string;
  date: string;
}

const MypagePointItem: React.FC<MypagePointItemProps> = ({
  isGood,
  point,
  reason,
  date,
}) => {
  return (
    <S.MypagePointItemWrapper>
      <S.MypagePointItemLeftWrapper>
        <S.MypagePointItemLeftReason>{reason}</S.MypagePointItemLeftReason>
        <S.MypagePointItemLeftDate>{date}</S.MypagePointItemLeftDate>
      </S.MypagePointItemLeftWrapper>
      <S.MypagePointItemPoint isGood={isGood}>
        {(isGood ? '+' : '-') + point}
      </S.MypagePointItemPoint>
    </S.MypagePointItemWrapper>
  );
};

export default MypagePointItem;
