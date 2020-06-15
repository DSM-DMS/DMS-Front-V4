import React, { useState, useCallback } from 'react';

import * as S from './styles'

import { ApplyGoingoutCalendarContainer } from '../../containers'

interface ApplyGoingoutProps {
  a: number
}

interface InputState {
  calendar: Boolean,
  time: Boolean
}

const ApplyGoingout: React.FC<ApplyGoingoutProps> = ({}) => {
  const [inputState, setInputState] = useState<InputState>({
    calendar: false,
    time: false,
  })

  return (
    <S.ApplyGoingoutWrapper>
      <S.ApplyGoingoutInfoWrapper>
        <S.ApplyGoingoutInputWrapper>
          <input readOnly value = "2020년" onClick={() => {setInputState({...inputState, calendar: !inputState.calendar})}}/>
          <ApplyGoingoutCalendarContainer show={inputState.calendar}/>
        </S.ApplyGoingoutInputWrapper>
        <S.ApplyGoingoutInputWrapper>
          <input readOnly value = "2020년"onClick={() => {setInputState({...inputState, time: !inputState.time})}}/>
          <ApplyGoingoutCalendarContainer show={inputState.time}/>
        </S.ApplyGoingoutInputWrapper>
        <S.ApplyGoingoutInputWrapper>
          <input readOnly value = "2020년"/>
        </S.ApplyGoingoutInputWrapper>
      </S.ApplyGoingoutInfoWrapper>
    </S.ApplyGoingoutWrapper>
  );
};

export default ApplyGoingout;