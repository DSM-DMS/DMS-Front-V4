import React, { useState, useEffect, useCallback, useMemo } from 'react';
import * as S from './style';

interface Props {
  day: string;
  handleClick: (key: string) => void;
  selectedDay: string;
  today: string;
}
const CalendarItem: React.FC<Props> = ({
  day,
  handleClick,
  selectedDay,
  today,
}) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  const getDayOfWeek = (day: string): string => {
    const pivotDay = new Date(day);
    const dayOfWeek = week[pivotDay.getDay()];
    return dayOfWeek;
  };
  const getDate = (day: string): string => {
    const date = day.split(' ');
    return date[2];
  };

  const date = useMemo(() => getDate(day), [day]);
  const dayOfWeek = useMemo(() => getDayOfWeek(day), [day]);
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
