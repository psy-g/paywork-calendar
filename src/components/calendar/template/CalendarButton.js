import React from 'react';
import styled from 'styled-components/macro';

const CalendarButton = ({ saveState }) => {
  const handlerPrevMonth = () => {
    saveState(-1);
  };

  const handlerNextMonth = () => {
    saveState(+1);
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
