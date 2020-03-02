import React from 'react';
import * as S from './style';

export interface Props {
   schedule: string;
  date: string;
  place: string;
}

const AcademicCalendarItem: React.StatelessComponent<Props> = ({
   schedule: scadule,
  date,
  place,   
}) => {
  return (
    <S.AcademicCalendarItemRow>
      <S.AcademicCalendarItemData>{scadule}</S.AcademicCalendarItemData>
      <S.AcademicCalendarItemData>{date}</S.AcademicCalendarItemData>
      <S.AcademicCalendarItemData>{place}</S.AcademicCalendarItemData>
    </S.AcademicCalendarItemRow>
  );
};

export default AcademicCalendarItem;
