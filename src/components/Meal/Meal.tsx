import React from 'react';
import * as S from './style';
import MealCard from '../MealCard/MealCard';
import morningIcon from '../../assets/icon/morning.png';
import lunchIcon from '../../assets/icon/lunch.png';
import dinnerIcon from '../../assets/icon/dinner.png';

interface Props {
  breakfast: string[];
  lunch: string[];
  dinner: string[];
}

const Meal: React.StatelessComponent<Props> = ({
  breakfast,
  lunch,
  dinner,
}) => {
  return (
    <>
      <S.MealContainer>
        <MealCard
          IconSrc={morningIcon}
          eatingTime={'아침'}
          mealList={breakfast}
        />
        <MealCard IconSrc={lunchIcon} eatingTime={'점심'} mealList={lunch} />
        <MealCard IconSrc={dinnerIcon} eatingTime={'저녁'} mealList={dinner} />
      </S.MealContainer>
    </>
  );
};

export default Meal;
