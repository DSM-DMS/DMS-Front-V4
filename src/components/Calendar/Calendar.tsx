import React from 'react';
import * as S from './style';
import CalendarItem from '../CalendarItem/CalendarItem';

interface Props {
  weekDate: string[];
}
const Calendar: React.FC<Props> = ({ weekDate }) => {
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const getDayOfWeek = (dayDate: string): string => {
    const pivotDay = new Date(dayDate);
    const dayOfWeek = week[pivotDay.getDay()];
    return dayOfWeek;
  };
  const getDate = (dayDate: string): string => {
    const day = dayDate.split(' ');
    console.log(`일은 : ${day[2]}`);
    return day[2];
  };
  return (
    <S.CalendarItemWrapper>
      {weekDate.map(dayDate => (
        <CalendarItem
          dayOfWeek={getDayOfWeek(dayDate)}
          date={getDate(dayDate)}
        />
      ))}
    </S.CalendarItemWrapper>
  );
};

export default Calendar;
