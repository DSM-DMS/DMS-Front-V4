import React, { useState } from 'react';
import Meal from '../../components/Meal/Meal';

interface Props {}

const mealList: Object = {
  breakfast: ['밥', '국', '김치', '반찬1', '반찬2'],
  dinner: ['밥', '국', '김치', '반찬1', '반찬2'],
  lunch: ['밥', '국', '김치', '반찬1', '반찬2'],
};

const MealContainer: React.FC<Props> = () => {
  const [mealInfo, SetMealInfo] = useState(mealList);
  return (
    <>
      <Meal mealInfo={mealInfo}></Meal>
    </>
  );
};

export default MealContainer;
