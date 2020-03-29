import React from 'react';
import * as S from './style';

export interface Props {
  name: string;
  time: string;
  place: string;
}

const AcademicCalendarItem: React.StatelessComponent<Props> = ({
  name,
  time,
  place,
}) => {
  return (
    <S.AcademicCalendarItemRow>
      <S.AcademicCalendarItemData>{name}</S.AcademicCalendarItemData>
      <S.AcademicCalendarItemData>{time}</S.AcademicCalendarItemData>
      <S.AcademicCalendarItemData>{place}</S.AcademicCalendarItemData>
    </S.AcademicCalendarItemRow>
  );
};

export default AcademicCalendarItem;
