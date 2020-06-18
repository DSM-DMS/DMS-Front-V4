import React, { useState, useContext } from 'react';

import { C } from '../../utils'

import * as S from './styles'

import { ApplyGoingoutCalendarContainer } from '../../containers'

interface ApplyGoingoutProps {
  a: number
}

const ApplyGoingout: React.FC<ApplyGoingoutProps> = ({}) => {
  const [selectedDate] = useContext(C.ApplyGoingoutContext);
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
          <input readOnly value = {`${selectedDate.year}년 ${selectedDate.month}월 ${selectedDate.date}일`} onClick={HandleCalendarState}/>
          <ApplyGoingoutCalendarContainer show={calendarState} HandleCalendarState = {HandleCalendarState}/>
        </S.ApplyGoingoutInputWrapper>
        <S.ApplyGoingoutInputWrapper>
          <input readOnly value = "2020년" onClick={HandleTimeState}/>
          <ApplyGoingoutCalendarContainer show={timeState} />
        </S.ApplyGoingoutInputWrapper>
        <S.ApplyGoingoutInputWrapper>
          <input value = "2020년"/>
        </S.ApplyGoingoutInputWrapper>
      </S.ApplyGoingoutInfoWrapper>
    </S.ApplyGoingoutWrapper>
  );
};

export default ApplyGoingout;