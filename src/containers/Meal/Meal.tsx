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
      '치즈달걀스파게티소스오븐구이',
      '치킨',
    ],
    lunch: [
      '기장밥',
      '콩비지찌개',
      '돈육콩불이',
      '해물볶음우동',
      '열무김치',
      '우리밀애그타르트',
    ],
    dinner: [],
  };
  const { breakfast, lunch, dinner } = mealList;
  return <Meal breakfast={breakfast} lunch={lunch} dinner={dinner} />;
};

export default MealContainer;
