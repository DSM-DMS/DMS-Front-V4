import React from 'react';
import * as S from './style';
import CalendarItem from '../CalendarItem/CalendarItem';

interface Props {
  date: number;
}
const Calendar: React.FC<Props> = ({ date }) => {
  return (
    <S.CalendarItemWrapper>
      <CalendarItem day={'월'} date={date}></CalendarItem>
      <CalendarItem day={'화'} date={date}></CalendarItem>
      <CalendarItem day={'수'} date={date}></CalendarItem>
      <CalendarItem day={'목'} date={date}></CalendarItem>
      <CalendarItem day={'금'} date={date}></CalendarItem>
      <CalendarItem day={'토'} date={date}></CalendarItem>
      <CalendarItem day={'일'} date={date}></CalendarItem>
    </S.CalendarItemWrapper>
  );
};

export default Calendar;
