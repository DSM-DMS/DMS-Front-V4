import React from 'react';
import * as S from './style';
import AcademicCalendarItem from '../AcdemiCalendarItem/AcademicCalendarItem';

interface Props {
  AcademicCalendarData: { schedule: string; date: string; place: string }[];
}
const AcademicCalendar: React.StatelessComponent<Props> = ({
  AcademicCalendarData,
}) => {
  return (
    <S.AcademicCalendarWrapper>
      <div style={{ overflow: 'auto' }}>
        <S.AcademicCalendarTable>
          {AcademicCalendarData.map(dataItem => (
            <AcademicCalendarItem
              schedule={dataItem.schedule}
              date={dataItem.date}
              place={dataItem.place}
            />
          ))}
        </S.AcademicCalendarTable>
      </div>
    </S.AcademicCalendarWrapper>
  );
};

export default AcademicCalendar;
