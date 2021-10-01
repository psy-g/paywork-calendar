import { useState, useEffect } from 'react';

export const useCalendar = () => {
  const [calendarState, setCalendarState] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    date: new Date().getDate(),
  });
  const [dateState, setDateState] = useState([]);

  useEffect(() => {
    saveState(0);
  }, []);

  const changeState = (number) => {
    const focusDate = dateState.map((date) => {
      date.id === number && date.thisMonth
        ? (date.focus = !date.focus)
        : (date.focus = false);

      return date;
    });

    setDateState(focusDate);
  };

  const saveState = (changeValue) => {
    // const date = new Date(
    //   calendarState.year,
    //   calendarState.month + changeValue,
    // );
    const date =
      changeValue !== 0
        ? new Date(calendarState.year, calendarState.month + changeValue)
        : new Date(new Date().getFullYear(), new Date().getMonth());
    const getYear = date.getFullYear();
    const getMonth = date.getMonth();
    const getToday = date.getDate();
    const thisMonthLast = new Date(getYear, getMonth + 1, 0);
    const prevMonthLast = new Date(getYear, getMonth, 0);

    // getDay(): 0(일요일) ~ 6(토요일)
    // 지난달 마지막이 0으로 안끝나면 지난달 날짜 몇개도 출력해야함
    // 이번달 마지막이 0으로 안끝나면 다음달 날짜 몇개도 출력해야함
    // [날짜, 지난달체크, 포커스체크]

    let temp = [];
    // 저번달
    for (let i = 0; i < prevMonthLast.getDay(); i++) {
      temp.push({
        id: prevMonthLast.getDate() - i,
        focus: false,
        today: false,
        thisMonth: false,
      });
    }
    // 이번달
    for (let i = 0; i < thisMonthLast.getDate(); i++) {
      temp.push({
        id: i + 1,
        focus: false,
        today:
          new Date().getMonth() === getMonth && getToday === i + 1
            ? true
            : false,
        thisMonth: true,
      });
    }
    // 다음달
    if (thisMonthLast.getDay() !== 0) {
      for (let i = 0; i < 7 - thisMonthLast.getDay(); i++) {
        temp.push({
          id: i + 1,
          focus: false,
          today: false,
          thisMonth: false,
        });
      }
    }

    setDateState(temp);
    setCalendarState({
      year: getYear,
      month: getMonth,
      today: getToday,
    });
  };

  return {
    calendarState,
    dateState,
    changeState,
    saveState,
  };
};
