import React from 'react';
import * as S from './style';

interface Props {
  mealInfo: string[];
}

const MealInfo: React.StatelessComponent<Props> = ({ mealInfo }) => {
  return (
    <S.InfoContainer>
      {mealInfo.map(infoItem => (
        <S.InfoItem>{infoItem}</S.InfoItem>
      ))}
    </S.InfoContainer>
  );
};

export default MealInfo;
