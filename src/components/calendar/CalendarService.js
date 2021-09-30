import { useState } from 'react';

export const useCalendar = () => {
  const [calendarState, setCalendarState] = useState();

  return {
    calendarState,
  };
};
