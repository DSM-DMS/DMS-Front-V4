import React, { useState } from 'react';
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
  today
}) => {
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const getDayOfWeek = (dayDate: string): string => {
    const pivotDay = new Date(dayDate);
    const dayOfWeek = week[pivotDay.getDay()];
    return dayOfWeek;
  };
  const getDate = (dayDate: string): string => {
    const day = dayDate.split(' ');
    return day[2];
  };
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
          dayOfWeek={getDayOfWeek(dayDate)}
          date={getDate(dayDate)}
          handleClick={handleClick}
          selectedDay={selectedDay}
          today={today}
        />
      ))}
      <S.MoveBtnWrapper>
        <S.MoveWeekBtn
          src={upArrow}
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            getLastWeek();
          }}
        />
        <S.Month>{getSelectedMonth(selectedDay)}</S.Month>
        <S.MoveWeekBtn
          src={downArrow}
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            getNextWeek();
          }}
        />
      </S.MoveBtnWrapper>
    </S.CalendarItemWrapper>
  );
};

export default Calendar;
