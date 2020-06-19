import React, { useState } from 'react';

import * as S from './styles'

import { ApplyGoingoutCalendarContainer, ApplyGoingoutTimeContainer } from '../../containers'

interface ApplyGoingoutProps {
  year: number,
  month: number,
  date: number
}

const ApplyGoingout: React.FC<ApplyGoingoutProps> = ({year, month, date}) => {
  const [calendarState, setCalendarState] = useState(false);
  const [timeState, setTimeState] = useState(false);

  const HandleCalendarState = () => {
    setCalendarState(prev => !prev);
  }

  const HandleTimeState = () => {
    setTimeState(prev => !prev);
  }

  return (
    <S.ApplyGoingoutWrapper>
      <S.ApplyGoingoutInfoWrapper>
        <S.ApplyGoingoutInputWrapper>
          <input readOnly value = {`${year}년 ${month}월 ${date}일`} onClick={HandleCalendarState}/>
          <ApplyGoingoutCalendarContainer show={calendarState} HandleCalendarState = {HandleCalendarState}/>
        </S.ApplyGoingoutInputWrapper>
        <S.ApplyGoingoutInputWrapper>
          <input readOnly value = "2020년" onClick={HandleTimeState}/>
          <ApplyGoingoutTimeContainer show={timeState} HandleTimeState = {HandleTimeState}/>
        </S.ApplyGoingoutInputWrapper>
        <S.ApplyGoingoutInputWrapper>
          <input value = "2020년"/>
        </S.ApplyGoingoutInputWrapper>
      </S.ApplyGoingoutInfoWrapper>
    </S.ApplyGoingoutWrapper>
  );
};

export default ApplyGoingout;