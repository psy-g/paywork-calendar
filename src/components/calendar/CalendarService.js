import { useState, useEffect } from 'react';

export const useCalendar = () => {
  const [dateState, setDateState] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    today: new Date().getDate(),
  });
  const [checkState, setCheckState] = useState([]);

  useEffect(() => {
    const newCheck = makeDateArr();

    setCheckState(newCheck);
  }, [dateState]);

  const changeDate = (changeValue) => {
    const newDate =
      changeValue !== 0
        ? new Date(dateState.year, dateState.month + changeValue)
        : new Date(new Date().getFullYear(), new Date().getMonth());

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

  const makeDateArr = () => {
    const { year, month } = dateState;
    const thisMonthLast = new Date(year, month + 1, 0);
    const prevMonthLast = new Date(year, month, 0);
    let tempArr = [];

    // getDay(): 0(일요일) ~ 6(토요일)
    // 지난달 마지막이 0으로 안끝나면 지난달 날짜 몇개도 출력해야함
    // 이번달 마지막이 0으로 안끝나면 다음달 날짜 몇개도 출력해야함
    // [날짜, 지난달체크, 포커스체크]

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
        focus: false,
        today:
          new Date().getMonth() === month && dateState.today === i + 1
            ? true
            : false,
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

    return tempArr;
  };

  return {
    dateState,
    checkState,
    changeFocus,
    changeDate,
  };
};
