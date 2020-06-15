import React, { useState, useEffect, useRef } from 'react';

import { ApplyGoingoutCalendar } from '../../components';

interface ApplyGoingoutCalendarContainerProps {
  show: boolean,
}

type StartDay = (a: number, b: number) => number;

interface IDate {
  year: number,
  month: number,
  startDay: number
}

const StartDay: StartDay = (year, month) => {
  const week = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let yearDate = year * 365 + (Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400));
  let monthDate = 0;
  week.every((el, idx) => {
    if(idx + 1 <= month - 1) {
      monthDate += el
      return true;
    }
    else return false;
  })

  return (yearDate + monthDate) % 7;
}

const date : Date = new Date();
const todayYear : number = date.getFullYear();
const todayMonth : number = date.getMonth() + 1;

const ApplyGoingoutCalendarContainer: React.FC<ApplyGoingoutCalendarContainerProps> = ({show}) => {
  console.log('re-render');

  const [curDate, setDate] = useState<IDate>({
    year: todayYear,
    month: todayMonth,
    startDay: StartDay(todayYear, todayMonth)
  })

  return (
    <ApplyGoingoutCalendar 
      show={show}
      curDate={curDate}
    />
  );
};

export default ApplyGoingoutCalendarContainer;