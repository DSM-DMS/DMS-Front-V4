import React from 'react';

import { withAnimation } from '../../utils'

import * as S from "./styles"

interface ApplyGoingoutCalendarProps {
  show: boolean,
  handleAnimationEnd: any,
  curDate: {
    year: number,
    month: number,
    startDay: number
  }
}

const ApplyGoingoutCalendar: React.FC<ApplyGoingoutCalendarProps> = ({show, handleAnimationEnd, curDate}) => {
  return (
    <S.ApplyGoingoutCalendarWrapper onAnimationEnd={handleAnimationEnd} show={show}>
      {curDate.year}년 {curDate.month}월
    </S.ApplyGoingoutCalendarWrapper>
  );
};

export default withAnimation(ApplyGoingoutCalendar);