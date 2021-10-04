import { useState, useEffect } from 'react';

import {
  dateFormat,
  thisYear,
  thisMonth,
  today,
  dayNum,
  dateNum,
  monthNum,
  yearNum,
} from 'utils/date';

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
        ? dateFormat(dateState.year, dateState.month + changeValue, 1)
        : dateFormat(thisYear(), thisMonth(), 1);

    setDateState({
      ...dateState,
      year: yearNum(newDate),
      month: monthNum(newDate),
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

    for (let i = dayNum(prevMonthLast); i > 0; i--) {
      checkListArr.push({
        date: dateNum(prevMonthLast) - i + 1,
        focus: false,
        today: false,
        sunday: false,
        thisMonth: false,
      });
    }
    for (let i = 0; i < dateNum(thisMonthLast); i++) {
      checkListArr.push({
        date: i + 1,
        focus: focusDate === i + 1 ? true : false,
        today: thisMonth() === month && today() === i + 1 ? true : false,
        sunday: dayNum(dateFormat(year, month, i + 1)) % 7 === 0 ? true : false,
        thisMonth: true,
      });
    }
    if (dayNum(thisMonthLast) !== 0) {
      for (let i = 0; i < 7 - dayNum(thisMonthLast); i++) {
        checkListArr.push({
          date: i + 1,
          focus: false,
          today: false,
          sunday: false,
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
