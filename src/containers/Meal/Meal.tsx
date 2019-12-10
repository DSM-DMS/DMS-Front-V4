import React, { useState } from 'react';
import Meal from '../../components/Meal/Meal';

interface Props {}

const MealContainer: React.FC<Props> = () => {
  const mealList = {
    breakfast: [
      '현미밥',
      '카래감자볶음',
      '배추김치',
      '맑은미역국',
      '사과',
      '쥬스',
      '옥수수치즈닭불구이',
    ],
    lunch: [
      '기장밥',
      '콩비지찌개',
      '돈육콩불이',
      '해물볶음우동',
      '열무김치',
      '우리밀애그타르트',
    ],
    dinner: [
      '흑미밥',
      '등뼈우거지탕',
      '햄에그까스',
      '부들어묵볶음',
      '깍두기',
      '방울토마토',
    ],
  };
  return (
    <>
      <Meal
        breakfast={mealList.breakfast}
        lunch={mealList.lunch}
        dinner={mealList.dinner}
      ></Meal>
    </>
  );
};

export default MealContainer;
