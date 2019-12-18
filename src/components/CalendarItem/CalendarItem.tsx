import React from 'react';
import * as S from './style';

interface Props {
  day: string;
  date: number;
}
const CalendarItem: React.FC<Props> = ({ day, date }) => {
  return (
    <S.CalendarItem>
      <S.CalendarInfoWrapper>
        <S.CalendarInfo>{day}</S.CalendarInfo>
        <S.CalendarInfo>{date}</S.CalendarInfo>
      </S.CalendarInfoWrapper>
    </S.CalendarItem>
  );
};

export default CalendarItem;
