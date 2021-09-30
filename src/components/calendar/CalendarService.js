import { useState, useEffect } from 'react';

export const useCalendar = () => {
  const [calendarState, setCalendarState] = useState({
    year: null,
    month: null,
    date: null,
  });
  const [dateArr, setDateArr] = useState([]);

  useEffect(() => {
    const date = new Date();
    const getYear = date.getFullYear();
    const getMonth = date.getMonth();
    const getToday = date.getDate();

    const thisMonthLast = new Date(getYear, getMonth + 1, 0);
    const lastMonthLast = new Date(getYear, getMonth, 0);

    // console.log(
    //   '지난달 마지막 요일',
    //   lastMonthLast.getDay(),
    //   '날짜',
    //   lastMonthLast.getDate(),
    // );
    // console.log(
    //   '이번달 마지막 요일',
    //   thisMonthLast.getDay(),
    //   '날짜',
    //   thisMonthLast.getDate(),
    // );
    // getDay(): 0(일요일) ~ 6(토요일)
    // 지난달 마지막이 0으로 안끝나면 지난달 날짜 몇개도 출력해야함
    // 이번달 마지막이 0으로 안끝나면 다음달 날짜 몇개도 출력해야함

    const lastArr = Array.from({ length: lastMonthLast.getDay() }, (v, i) => [
      lastMonthLast.getDate() - i,
      false,
    ]);
    const thisArr = Array.from({ length: thisMonthLast.getDate() }, (v, i) => [
      i + 1,
      true,
    ]);

    setDateArr(lastArr.concat(thisArr));
    setCalendarState({
      year: getYear,
      month: getMonth,
      today: getToday,
    });
  }, []);

  return {
    calendarState,
    dateArr,
  };
};
