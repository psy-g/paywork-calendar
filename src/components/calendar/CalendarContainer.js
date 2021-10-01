import React from 'react';
import styled from 'styled-components/macro';

import { useCalendar } from './CalendarService';
import CalendarHead from 'components/calendar/template/CalendarHead';
import CalendarBody from 'components/calendar/template/CalendarBody';

const CalendarContainer = () => {
  const { dateState, checkState, changeFocus, changeDate } = useCalendar();

  return (
    <Container>
      <CalendarBox>
        <CalendarHead dateState={dateState} changeDate={changeDate} />
        <CalendarBody
          checkState={checkState}
          changeFocus={changeFocus}
          changeDate={changeDate}
        />
      </CalendarBox>
    </Container>
  );
};

export default CalendarContainer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 430px;
  height: 460px;
`;
