import React from 'react';
import {
  MealContainer,
  AcademicCalendarContainer,
  CalendarContainer,
} from '../../containers';

interface Props {}

const MainContainer: React.FC<Props> = () => {
  return (
    <>
      <MealContainer />
      <CalendarContainer />
      <AcademicCalendarContainer />
    </>
  );
};

export default MainContainer;
