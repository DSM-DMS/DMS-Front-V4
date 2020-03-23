import React, { useState, useMemo } from 'react';
import * as S from './style';
import CalendarItem from '../CalendarItem/CalendarItem';
import upArrow from '../../assets/icon/up_arrow.png';
import downArrow from '../../assets/icon/down_arrow.png';

interface Props {
  today: string;
  weekDate: string[];
  handleClick: any;
  selectedDay: string;
  getLastWeek: () => void;
  getNextWeek: () => void;
}

const Calendar: React.FC<Props> = ({
  weekDate,
  handleClick,
  selectedDay,
  getLastWeek,
  getNextWeek,
  today,
}) => {
  const getSelectedMonth = (selectedDay: string): string => {
    const day = selectedDay.split(' ');
    return day[1];
  };
  return (
    <S.CalendarItemWrapper>
      {weekDate.map(dayDate => (
        <CalendarItem
          key={dayDate}
          day={dayDate}
          handleClick={handleClick}
          selectedDay={selectedDay}
          today={today}
        />
      ))}
      <S.MoveBtnWrapper>
        <S.MoveWeekBtn src={upArrow} onClick={getLastWeek} />
        <S.Month>{getSelectedMonth(selectedDay)}</S.Month>
        <S.MoveWeekBtn src={downArrow} onClick={getNextWeek} />
      </S.MoveBtnWrapper>
    </S.CalendarItemWrapper>
  );
};

export default Calendar;
