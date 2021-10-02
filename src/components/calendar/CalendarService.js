import { useState, useEffect, useRef } from 'react';

import { dateFormat, thisYear, thisMonth, today } from 'utils/date';

export const useCalendar = () => {
  const [dateState, setDateState] = useState({
    year: thisYear(),
    month: thisMonth(),
    today: today(),
  });
  const [checkState, setCheckState] = useState([]);
  const focus = useRef({ month: null, date: null });

  useEffect(() => {
    makeDateArr(dateState.year, dateState.month);
  }, [dateState.year, dateState.month]);

  const changeDate = (changeValue) => {
    const newDate =
      changeValue !== 0
        ? dateFormat(dateState.year, dateState.month + changeValue)
        : dateFormat(thisYear(), thisMonth());

    setDateState({
      ...dateState,
      year: newDate.getFullYear(),
      month: newDate.getMonth(),
    });
  };

  const changeFocus = (dateNum) => {
    const focusDate = checkState.map((date) => {
      date.id === dateNum && date.thisMonth
        ? (date.focus = !date.focus)
        : (date.focus = false);

      return date;
    });

    setCheckState(focusDate);
  };

  const makeDateArr = (year, month) => {
    const thisMonthLast = dateFormat(year, month + 1, 0);
    const prevMonthLast = dateFormat(year, month, 0);
    let tempArr = [];

    for (let i = prevMonthLast.getDay(); i > 0; i--) {
      tempArr.push({
        id: prevMonthLast.getDate() - i + 1,
        month: prevMonthLast.getMonth(),
        focus: false,
        today: false,
        thisMonth: false,
      });
    }
    for (let i = 0; i < thisMonthLast.getDate(); i++) {
      tempArr.push({
        id: i + 1,
        month: thisMonthLast.getMonth(),
        // focus: false,
        focus: focus.current.date === i + 1 ? true : false,
        today: thisMonth() === month && today() === i + 1 ? true : false,
        thisMonth: true,
      });
    }
    if (thisMonthLast.getDay() !== 0) {
      for (let i = 0; i < 7 - thisMonthLast.getDay(); i++) {
        tempArr.push({
          id: i + 1,
          month: thisMonthLast.getMonth() + 1,
          focus: false,
          today: false,
          thisMonth: false,
        });
      }
    }

    setCheckState(tempArr);
  };

  const setFocus = (month, date) => {
    if (!month) focus.current = { month: null, date: null };
    else focus.current = { month: month, date: date };
  };

  return {
    dateState,
    checkState,
    changeFocus,
    setFocus,
    changeDate,
  };
};
