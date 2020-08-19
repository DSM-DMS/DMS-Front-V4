import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AcademicCalendar from '../../components/AcademicCalendar/AcademicCalendar';
import { StoreState } from 'modules';
import { getScheduleThunk } from '../../modules/academicCalendar';
import addHyphenInDate from '../../util/addHyphenInDate';

const AcademicCalendarContainer: React.StatelessComponent = () => {
  const dispatch = useDispatch();
  const schedule = useSelector(
    (state: StoreState) => state.academicCalendar.schedule,
  );
  const selectedDate = useSelector(
    (state: StoreState) => state.calendar.selectedDay,
  );

  useEffect(() => {
    dispatch(getScheduleThunk(addHyphenInDate(selectedDate)));
  }, [selectedDate]);
  return <AcademicCalendar AcademicCalendarData={schedule} />;
};

export default AcademicCalendarContainer;
