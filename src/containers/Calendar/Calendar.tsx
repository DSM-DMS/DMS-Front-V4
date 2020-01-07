import React, { useState, useEffect } from 'react';
import Calendar from '../../components/Calendar/Calendar';
import moment, { weekdays, Moment } from 'moment';

interface Props {}

const CalendarContainer: React.FC<Props> = () => {
  const [weekDate, setWeekDate] = useState<string[]>([]);
  const today: string = moment().format('YYYY MM DD');

  const startOfDay = (date: string): Moment => {
    const startDate: Moment = moment(date).startOf('week');
    return startDate;
  };
  const endOfDay = (date: string): Moment => {
    const endDate: Moment = moment(date).endOf('week');
    return endDate;
  };

  const week = (today: string): string[] => {
    const newDate: string[] = [];
    const day = startOfDay(today);
    console.log(
      `day : ${day.format('YYYY MM DD')} endDay : ${endOfDay(today).format(
        `YYYY MM DD`,
      )}`,
    );
    while (day <= endOfDay(today)) {
      console.log(`day : ${day.format('YYYY MM DD')}`);
      newDate.push(day.format('YYYY MM DD'));
      day.add(1, 'day');
      console.log(newDate);
    }
    console.log(`final newDate : ${newDate}`);
    return newDate;
  };

  useEffect(() => {
    setWeekDate(week(today));
  }, []);

  return (
    <>
      <Calendar weekDate={weekDate} />
    </>
  );
};

export default CalendarContainer;
