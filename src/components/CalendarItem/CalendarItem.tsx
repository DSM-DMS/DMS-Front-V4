import React, { useState, useEffect, useCallback } from 'react';
import * as S from './style';

interface Props {
  day: string;
  dayOfWeek: string;
  date: string;
  handleClick: (key: string) => void;
  selectedDay: string;
  today: string;
}
const CalendarItem: React.FC<Props> = ({
  day,
  dayOfWeek,
  date,
  handleClick,
  selectedDay,
  today,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const checkDay = useCallback(
    (selectedDay: string): void => {
      selectedDay === day ? setIsSelected(true) : setIsSelected(false);
    },
    [day, setIsSelected],
  );
  const isToday = (today: string): boolean => {
    if (today === day) return true;
    else false;
  };
  useEffect(() => {
    checkDay(selectedDay);
  }, [selectedDay]);
  return (
    <S.CalendarItem
      isToday={isToday(today)}
      isSelected={isSelected}
      onClick={() => {
        handleClick(day);
      }}
    >
      <S.CalendarInfoWrapper>
        <S.CalendarInfo isSelected={isSelected}>{dayOfWeek}</S.CalendarInfo>
        <S.CalendarInfo isSelected={isSelected}>{date}</S.CalendarInfo>
      </S.CalendarInfoWrapper>
    </S.CalendarItem>
  );
};

export default CalendarItem;
