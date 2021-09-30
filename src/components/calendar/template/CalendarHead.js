import React from 'react';
import styled from 'styled-components/macro';

import CalendarButton from 'components/calendar/template/CalendarButton';

const CalendarHead = ({ calendarState }) => {
  return (
    <HeadBlock>
      <span>
        {calendarState.year}. {calendarState.month + 1}
      </span>
      <CalendarButton />
      <span>이번달</span>
    </HeadBlock>
  );
};

export default CalendarHead;

const HeadBlock = styled.div`
  display: flex;
  width: 100%;
  height: 15%;

  span {
    width: calc(100% / 3);
    text-align: center;
  }
`;
