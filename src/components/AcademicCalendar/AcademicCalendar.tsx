import React from 'react';
import * as S from './style';
import AcademicCalendarItem from '../AcdemiCalendarItem/AcademicCalendarItem';

interface Props {
  AcademicCalendarData: { scadule: string; date: string; place: string }[];
}
const AcademicCalendar: React.StatelessComponent<Props> = ({
  AcademicCalendarData,
}) => {
  return (
    <S.AcademicCalendarWrapper>
      <div style={{ overflow: 'auto' }}>
        <S.AcademicCalendarTabel>
          {AcademicCalendarData.map(dataItem => (
            <AcademicCalendarItem
              scadule={dataItem.scadule}
              date={dataItem.date}
              place={dataItem.place}
            />
          ))}
        </S.AcademicCalendarTabel>
      </div>
    </S.AcademicCalendarWrapper>
  );
};

export default AcademicCalendar;
