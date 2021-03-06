import React, { useState, useEffect, useCallback } from 'react';
import Calendar from '../../components/Calendar/Calendar';
import moment, { weekdays, Moment } from 'moment';

interface Props {}

const CalendarContainer: React.FC<Props> = () => {
  const today: string = moment().format('YYYY MM DD');
  const [week, setWeek] = useState<string[]>([]);
  const [selectedDay, setSelectedDay] = useState<string>(today);
  const [pivotDay, setPivotDay] = useState<string>(today);

  const startOfDay = useCallback((date: string): Moment => {
    const startDate: Moment = moment(date).startOf('week');
    return startDate;
  }, []);
  const getEndOfDay = useCallback((date: string): Moment => {
    const endDate: Moment = moment(date).endOf('week');
    return endDate;
  }, []);

  const getWeek = useCallback((pivotDay: string): string[] => {
    const newDate: string[] = [];
    const day = startOfDay(pivotDay);
    while (day <= getEndOfDay(pivotDay)) {
      newDate.push(day.format('YYYY MM DD'));
      day.add(1, 'day');
    }
    return newDate;
  }, []);

  const getLastWeek = useCallback((): void => {
    const lastMonday: string = startOfDay(pivotDay)
      .subtract(1, 'weeks')
      .format('YYYY MM DD');
    setPivotDay(lastMonday);
    const lastWeek: string[] = getWeek(lastMonday);
    setWeek(lastWeek);
  }, [week]);

  const getNextWeek = useCallback((): void => {
    const NextMonday: string = startOfDay(pivotDay)
      .add(1, 'weeks')
      .format('YYYY MM DD');
    setPivotDay(NextMonday);
    const NextWeek: string[] = getWeek(NextMonday);
    setWeek(NextWeek);
  }, [week]);

  const handleClick = useCallback(
    (selectedDay: string): void => {
      setSelectedDay(selectedDay);
    },
    [setSelectedDay],
  );

  useEffect(() => {
    setWeek(getWeek(today));
  }, []);
  return (
    <>
      <Calendar
        today={today}
        weekDate={week}
        handleClick={handleClick}
        selectedDay={selectedDay}
        getLastWeek={getLastWeek}
        getNextWeek={getNextWeek}
      />
    </>
  );
};

export default CalendarContainer;
