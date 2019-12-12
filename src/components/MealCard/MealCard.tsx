import React from 'react';
import * as S from './style';
import MealInfo from '..//MealInfo/MealInfo';

interface Props {
  IconSrc: any;
  eatingTime: string;
  mealList: string[];
}

const MealCard: React.FC<Props> = ({ IconSrc, eatingTime, mealList }) => {
  return (
    <S.MealCardContainer>
      <S.MealCardHeader>
        <S.MealCardIcon src={IconSrc} />
        <S.MealCardName>{eatingTime}</S.MealCardName>
      </S.MealCardHeader>
      <MealInfo mealInfo={mealList}></MealInfo>
    </S.MealCardContainer>
  );
};

export default MealCard;
