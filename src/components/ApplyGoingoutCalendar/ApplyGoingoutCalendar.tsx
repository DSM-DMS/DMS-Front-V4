import React, { MouseEvent, useMemo, useContext } from 'react';

import { C } from '../../utils'

import { withAnimation } from '../../utils';

import * as S from "./styles";

type HandleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => void

interface ApplyGoingoutCalendarProps {
  show: boolean,
  handleAnimationEnd: any,
  curDate: {
    year: number,
    month: number,
    startDay: number
  },
  handleChoiceMonth: HandleMouseEvent,
  handleChoiceDate: HandleMouseEvent;
}

const isLeapYear = (year) => {
  return year % 4 == 0 && year % 100 !== 0 || year % 400 === 0;
};

const MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const ApplyGoingoutCalendar: React.FC<ApplyGoingoutCalendarProps> = ({show, handleAnimationEnd, curDate, handleChoiceMonth, handleChoiceDate}) => {
  const [selectedDate] = useContext(C.ApplyGoingoutContext);

  const month: React.ReactElement[][] = useMemo(() => {
    const monthElement: React.ReactElement[][] = [];
    const monthDays: number = curDate.month === 2 && isLeapYear(curDate.year) ? MONTH_DAYS[curDate.month - 1] + 1 : MONTH_DAYS[curDate.month - 1];
    let startDay: number = curDate.startDay;

    for(let i = 1; i <= monthDays;) {
      let weekElement: React.ReactElement[] = [];
      for(let j = 0; j < 7; j++) { 
        let className = (selectedDate.year === curDate.year && selectedDate.month === curDate.month && selectedDate.date === i) ? " selected" : "";
        if(j < startDay)  weekElement.push(<span className="none" key={(i+30)*j}></span>);
        else if(i <= monthDays) weekElement.push(
        <span 
          data-month={curDate.month} 
          data-year={curDate.year} 
          data-date={i} className={`date${className}`} 
          onClick={handleChoiceDate} 
          key={i}>{i++}
        </span>);
        else weekElement.push(<span className="none" key={(i+30)*j}></span>)
      }
      monthElement.push(weekElement)
      startDay = 0
    }
    return monthElement
  }, [curDate.year, curDate.month]);

  return (
    <S.ApplyGoingoutCalendarWrapper onAnimationEnd={handleAnimationEnd} show={show}>
      <S.ApplyGoingoutCalendarHeaderWrapper>
        <label>
          {
            '<'
          }
          <button name="minus" onClick = {handleChoiceMonth}></button>
        </label>
        <div>{curDate.year}년 {curDate.month}월</div>
        <label>
          {
            '>'
          }
          <button name="plus" onClick = {handleChoiceMonth}></button>
        </label>
      </S.ApplyGoingoutCalendarHeaderWrapper>
      <S.ApplyGoingoutCalendarContentWrapper>
        <div className="row" key='week'>
          <span className="bold">일</span>
          <span className="bold">월</span>
          <span className="bold">화</span>
          <span className="bold">수</span>
          <span className="bold">목</span>
          <span className="bold">금</span>
          <span className="bold">토</span>
        </div>
        {
          month.map((el, idx) => 
            <div className="row" key={idx}>
              {el}
            </div>
          )
        }
      </S.ApplyGoingoutCalendarContentWrapper>
    </S.ApplyGoingoutCalendarWrapper>
  );
};

export default withAnimation(ApplyGoingoutCalendar);