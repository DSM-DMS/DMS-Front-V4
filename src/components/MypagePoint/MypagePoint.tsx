import React from 'react';
import * as S from './styles';
import { MypagePointItem } from "../";
interface MypagePointProps {}

const MypagePoint: React.FC<MypagePointProps> = ({
}) => {
  return (
    <S.MypagePointWrapper>
      <MypagePointItem isGood={true} point={22}/>
      <MypagePointItem isGood={false} point={17}/>
      <S.MypagePointLookUpBtn>조회</S.MypagePointLookUpBtn>
    </S.MypagePointWrapper>
  );
};

export default MypagePoint;
