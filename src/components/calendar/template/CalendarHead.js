import React from 'react';
import styled from 'styled-components/macro';

import CalendarButton from 'components/calendar/template/CalendarButton';

const CalendarHead = ({ calendarState, saveState }) => {
  const handlerThisMonth = () => {
    saveState(0);
  };

  return (
    <HeadBlock>
      <MonthWrapper>
        {calendarState.year}. {calendarState.month + 1}
      </MonthWrapper>
      <CalendarButton saveState={saveState} />
      <ThisMonthWrapper onClick={handlerThisMonth}>이번달</ThisMonthWrapper>
    </HeadBlock>
  );
};

export default CalendarHead;

const HeadBlock = styled.div`
  display: flex;
  width: 100%;
  height: 15%;

  div {
    width: calc(100% / 3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MonthWrapper = styled.div``;

const ThisMonthWrapper = styled.div``;
