import React from 'react';

import * as S from './style';
import * as apiType from '../../util/api/apiTypes';
import AcademicCalendarItem from '../AcdemiCalendarItem/AcademicCalendarItem';

interface Props {
  AcademicCalendarData: apiType.scheduleType[];
}
const AcademicCalendar: React.StatelessComponent<Props> = ({
  AcademicCalendarData,
}) => {
  return (
    <S.AcademicCalendarWrapper>
      <div style={{ overflow: 'auto' }}>
        <S.AcademicCalendarTable>
          {AcademicCalendarData.map((dataItem) => (
            <AcademicCalendarItem
              key={dataItem.name}
              name={dataItem.name}
              time={dataItem.time}
              place={dataItem.place}
            />
          ))}
        </S.AcademicCalendarTable>
      </div>
    </S.AcademicCalendarWrapper>
  );
};

export default AcademicCalendar;
