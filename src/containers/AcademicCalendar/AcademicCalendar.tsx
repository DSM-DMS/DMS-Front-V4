import React from 'react';
import AcademicCalendar from '../../components/AcademicCalendar/AcademicCalendar';
import AcademicCalendarItem from 'components/AcdemiCalendarItem/AcademicCalendarItem';

const AcademicCalendarContainer: React.StatelessComponent = () => {
  const dummy = {
    schedule: [
      {
        name: '정보보안과 대전교육정보원 체험학습',
        time: '오전 09:00 ~ 오후 12:00',
        place: '대전교육정보원',
      },
      {
        name: '전체 학생 아침 조회',
        time: '오전 09:30 ~ 오전 09:30',
        place: '새롬홀',
      },
    ],
  };

  return <AcademicCalendar AcademicCalendarData={dummy.schedule} />;
};

export default AcademicCalendarContainer;
