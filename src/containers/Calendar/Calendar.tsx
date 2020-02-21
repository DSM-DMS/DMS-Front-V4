import React, { useState, useEffect } from 'react';
import Calendar from '../../components/Calendar/Calendar';
import moment, { weekdays, Moment } from 'moment';

interface Props {}

const CalendarContainer: React.FC<Props> = () => {
  const today: string = moment().format('YYYY MM DD');
  const [weekDate, setWeekDate] = useState<string[]>([]);
  const [selectedDay, setSelectedDay] = useState<string>(today);

  const startOfDay = (date: string): Moment => {
    const startDate: Moment = moment(date).startOf('week');
    return startDate;
  };
  const getEndOfDay = (date: string): Moment => {
    const endDate: Moment = moment(date).endOf('week');
    return endDate;
  };

  const getWeek = (today: string): string[] => {
    const newDate: string[] = [];
    const day = startOfDay(today); 
    console.log(
      `day : ${day.format('YYYY MM DD')} endDay : ${getEndOfDay(today).format(
        `YYYY MM DD`,
      )}`,
    );
    while (day <= getEndOfDay(today)) {
      console.log(`day : ${day.format('YYYY MM DD')}`);
      newDate.push(day.format('YYYY MM DD'));
      day.add(1, 'day');
      console.log(newDate);
    }
    console.log(`final newDate : ${newDate}`);
    return newDate;
  };

  // const getLastWeek = (): string[] => {};
  // const getNextWeek = (): string[] => {};

  const handleClick = (selectedDay: string) => {
    console.log(selectedDay);
    setSelectedDay(selectedDay);
  };
  useEffect(() => {
    setWeekDate(getWeek(today));
  }, []);

  return (
    <>
      <Calendar
        weekDate={weekDate}
        handleClick={handleClick}
        selectedDay={selectedDay}
      />
    </>
  );
};

export default CalendarContainer;
