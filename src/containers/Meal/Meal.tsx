import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Meal from '../../components/Meal/Meal';
import { StoreState } from 'modules';
import { getMealThunk } from '../../modules/meal';
import addHyphenInDate from '../../util/addHyphenInDate';

interface Props {}

const MealContainer: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(
    (state: StoreState) => state.calendar.selectedDay,
  );
  const mealList = useSelector((state: StoreState) => state.meal.meal);
  const { breakfast, lunch, dinner } = mealList;

  useEffect(() => {
    console.log(addHyphenInDate(selectedDate));
    dispatch(getMealThunk(addHyphenInDate(selectedDate)));
  }, [selectedDate]);
  return <Meal breakfast={breakfast} lunch={lunch} dinner={dinner} />;
};

export default MealContainer;
