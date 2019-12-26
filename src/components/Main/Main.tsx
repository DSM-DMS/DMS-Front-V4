import React from 'react';
import * as S from './style';
import MealContainer from '../../containers/Meal/Meal';
import CalendarContainer from '../../containers/Calendar/Calendar';
import AcademicCalendarContainer from '../../containers/AcademicCalendar/AcademicCalendar';

interface Props {}

const Main: React.FC<Props> = () => {
  return (
    <S.MainContainer>
      <MealContainer />
      <CalendarContainer />
      <AcademicCalendarContainer />
    </S.MainContainer>
  );
};

export default Main;
