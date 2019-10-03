import React from 'react';
import * as S from './styles';
import { MypagePointItem } from "../";
interface MypagePointProps {}

const MypagePoint: React.FC<MypagePointProps> = ({
}) => {
  return (
    <S.MypagePointWrapper>
      <MypagePointItem isGoodPoint={true} point={22}/>
      <MypagePointItem isGoodPoint={false} point={17}/>
      <S.MypagePointLookUpBtn>조회</S.MypagePointLookUpBtn>
    </S.MypagePointWrapper>
  );
};

export default MypagePoint;
