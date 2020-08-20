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
      {time !== null ? (
        <S.AcademicCalendarItemData>{time}</S.AcademicCalendarItemData>
      ) : (
        <S.AcademicCalendarItemData>시간이 없어요</S.AcademicCalendarItemData>
      )}
      {place !== null ? (
        <S.AcademicCalendarItemData>{place}</S.AcademicCalendarItemData>
      ) : (
        <S.AcademicCalendarItemData>장소가 없어요</S.AcademicCalendarItemData>
      )}
    </S.AcademicCalendarItemRow>
  );
};

export default AcademicCalendarItem;
