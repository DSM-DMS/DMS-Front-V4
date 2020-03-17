import React, { useState, useEffect } from 'react';
import Calendar from '../../components/Calendar/Calendar';
import moment, { weekdays, Moment } from 'moment';

interface Props {}

const CalendarContainer: React.FC<Props> = () => {
  const today: string = moment().format('YYYY MM DD');
  const [week, setWeek] = useState<string[]>([]);
  const [selectedDay, setSelectedDay] = useState<string>(today);
  const [pivotDay, setPivotDay] = useState<string>(today);

  const startOfDay = (date: string): Moment => {
    const startDate: Moment = moment(date).startOf('week');
    return startDate;
  };
  const getEndOfDay = (date: string): Moment => {
    const endDate: Moment = moment(date).endOf('week');
    return endDate;
  };

  const getWeek = (pivotDay: string): string[] => {
    const newDate: string[] = [];
    const day = startOfDay(pivotDay);
    while (day <= getEndOfDay(pivotDay)) {
      newDate.push(day.format('YYYY MM DD'));
      day.add(1, 'day');
    }
    return newDate;
  };

  const getLastWeek = (): void => {
    const lastMonday: string = startOfDay(pivotDay)
      .subtract(1, 'weeks')
      .format('YYYY MM DD');
    setPivotDay(lastMonday);
    const lastWeek: string[] = getWeek(lastMonday);
    setWeek(lastWeek);
  };
  const getNextWeek = (): void => {
    const NextMonday: string = startOfDay(pivotDay)
      .add(1, 'weeks')
      .format('YYYY MM DD');
    setPivotDay(NextMonday);
    const NextWeek: string[] = getWeek(NextMonday);
    setWeek(NextWeek);
  };

  const handleClick = (selectedDay: string): void => {;
    setSelectedDay(selectedDay);
  };
  useEffect(() => {
    setWeek(getWeek(today));
  }, []);

  return (
    <>
      <Calendar
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
