import React from 'react';
import styled from 'styled-components/macro';

const CalendarButton = ({ changeDate, setFocus }) => {
  const handlerPrevMonth = () => {
    setFocus();
    changeDate(-1);
  };

  const handlerNextMonth = () => {
    setFocus();
    changeDate(+1);
  };

  return (
    <ButtonBlock>
      <PrevMonth onClick={handlerPrevMonth}>«</PrevMonth>
      <NextMonth onClick={handlerNextMonth}>»</NextMonth>
    </ButtonBlock>
  );
};

export default CalendarButton;

const ButtonBlock = styled.div`
  display: flex;
`;

const PrevMonth = styled.div``;

const NextMonth = styled.div``;
