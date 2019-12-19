import React, { useState } from 'react';
import Calendar from '../../components/Calendar/Calendar';

interface Props {}

const CalendarContainer: React.FC<Props> = () => {
  const [date, setDate] = useState<number>(0);
  return <Calendar date={12} />;
};

export default CalendarContainer;
