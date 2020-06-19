import React, { useState, useContext, memo, MouseEvent } from 'react';

import { ApplyGoingoutCalendar } from '../../components';

import { C } from '../../utils'

interface ApplyGoingoutCalendarContainerProps {
  show: boolean,
  HandleCalendarState: () => void
}

type StartDay = (a: number, b: number) => number;

interface IDate {
  year: number,
  month: number,
  startDay: number
}

const isLeapYear = (year) => {
  return year % 4 == 0 && year % 100 !== 0 || year % 400 === 0;
};

const StartDay: StartDay = (year, month) => {
  const week: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let yearDate: number = (year-1) + (Math.floor((year-1) / 4) - Math.floor((year-1) / 100) + Math.floor((year-1) / 400));
  let monthDate: number = 0;
  week.every((el, idx) => {
    if(idx + 1 < month) {
      monthDate += (idx + 1 === 2 && isLeapYear(year)) ? (el + 1) % 7 : el % 7;
      return true;
    }
    else return false;
  })
  return (yearDate + monthDate + 1) % 7;
}

const date: Date = new Date();
const todayYear: number = date.getFullYear();
const todayMonth: number = date.getMonth() + 1;

const ApplyGoingoutCalendarContainer: React.FC<ApplyGoingoutCalendarContainerProps> = ({show, HandleCalendarState}) => {
  const [, setSelectedDate] = useContext(C.ApplyGoingoutContext);

  const [curDate, setDate] = useState<IDate>({
    year: todayYear,
    month: todayMonth,
    startDay: React.useMemo(() => StartDay(todayYear, todayMonth), [])
  })

  const HandleChoiceDate = (e: MouseEvent<HTMLElement>) => {
    const {dataset} = (e.target as HTMLElement);
    setSelectedDate({
      year: parseInt(dataset.year),
      month: parseInt(dataset.month),
      date: parseInt(dataset.date)
    })

    HandleCalendarState();
  }

  const HandleChoiceMonth = (e: MouseEvent<HTMLElement>) => {
    const {name} = (e.target as HTMLButtonElement);

    switch (name) {
      case 'minus':
        if(curDate.month === 1) {
          setDate(prev => ({
            ...prev,
            year: prev.year - 1,
            month: 12,
            startDay: StartDay(prev.year - 1, 12)
          }))
        }
        else {
          setDate(prev => ({
            ...prev,
            month: prev.month - 1,
            startDay: StartDay(prev.year, prev.month - 1)
          }))
        }
        break;

      case 'plus':
        if(curDate.month === 12) {
          setDate(prev => ({
            ...prev,
            year: prev.year + 1,
            month: 1,
            startDay: StartDay(prev.year + 1, 1)
          }))
        }
        else {
          setDate(prev => ({
            ...prev,
            month: prev.month + 1,
            startDay: StartDay(prev.year, prev.month + 1)
          }))
        }
        break;
      
      default:
        break;
    }
  }


  return (
    <ApplyGoingoutCalendar 
      show={show}
      curDate={curDate}
      handleChoiceMonth={HandleChoiceMonth}
      handleChoiceDate={HandleChoiceDate}
    />
  );
};

export default memo(ApplyGoingoutCalendarContainer);