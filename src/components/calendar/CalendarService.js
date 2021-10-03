import { useState, useEffect } from 'react';

import { dateFormat, thisYear, thisMonth, today } from 'utils/date';

export const useCalendar = () => {
  const [dateState, setDateState] = useState({
    year: thisYear(),
    month: thisMonth(),
    today: today(),
  });
  const [checkState, setCheckState] = useState([]);
  const [focusState, setFocusState] = useState({ date: null });

  useEffect(() => {
    makeCheckArr(dateState.year, dateState.month, focusState.date);
  }, [dateState.year, dateState.month, focusState.date]);

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
    const focusDate = checkState.map((ele) => {
      ele.date === dateNum && ele.thisMonth
        ? (ele.focus = !ele.focus)
        : (ele.focus = false);

      return ele;
    });

    setCheckState(focusDate);
  };

  const makeCheckArr = (year, month, focusDate) => {
    const thisMonthLast = dateFormat(year, month + 1, 0);
    const prevMonthLast = dateFormat(year, month, 0);
    let checkListArr = [];

    for (let i = prevMonthLast.getDay(); i > 0; i--) {
      checkListArr.push({
        date: prevMonthLast.getDate() - i + 1,
        focus: false,
        today: false,
        thisMonth: false,
      });
    }
    for (let i = 0; i < thisMonthLast.getDate(); i++) {
      checkListArr.push({
        date: i + 1,
        focus: focusDate === i + 1 ? true : false,
        today: thisMonth() === month && today() === i + 1 ? true : false,
        thisMonth: true,
      });
    }
    if (thisMonthLast.getDay() !== 0) {
      for (let i = 0; i < 7 - thisMonthLast.getDay(); i++) {
        checkListArr.push({
          date: i + 1,
          focus: false,
          today: false,
          thisMonth: false,
        });
      }
    }

    setCheckState(checkListArr);
  };

  const setFocus = (date) => {
    setFocusState({ date: date });
  };

  return {
    dateState,
    checkState,
    changeFocus,
    setFocus,
    changeDate,
  };
};
