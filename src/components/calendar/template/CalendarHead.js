import React from 'react';
import styled from 'styled-components/macro';

import CalendarButton from 'components/calendar/template/CalendarButton';

const CalendarHead = ({ dateState, changeDate, setFocus }) => {
  const handlerThisMonth = () => {
    setFocus();
    changeDate(0);
  };

  return (
    <HeadBlock>
      <MonthWrapper>
        {dateState.year}. {dateState.month + 1}
      </MonthWrapper>
      <CalendarButton changeDate={changeDate} setFocus={setFocus} />
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
