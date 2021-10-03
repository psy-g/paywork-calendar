import React from 'react';
import styled from 'styled-components/macro';

const CalendarItem = ({ data, changeFocus, setFocus, changeDate }) => {
  const { date, focus, today, thisMonth } = data;

  const handlerFocus = () => {
    if (!thisMonth) {
      setFocus(date);

      if (date < 7) changeDate(+1);
      else changeDate(-1);
    } else changeFocus(date);
  };

  return (
    <>
      <ItemBlock
        monthCheck={thisMonth}
        focusCheck={focus}
        onClick={handlerFocus}
      >
        {date}
        <Circle focusCheck={focus} todayCheck={today} />
      </ItemBlock>
    </>
  );
};

export default CalendarItem;

const ItemBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% / 7);
  cursor: pointer;
  color: ${(props) => (props.monthCheck ? '#000000' : '#d5d5d6')};
  color: ${(props) => props.focusCheck && '#fafafa'};
`;

const Circle = styled.div`
  position: absolute;
  background-color: ${(props) => props.todayCheck && '#B8B8B8'};
  background-color: ${(props) => props.focusCheck && '#30a9de'};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: -10;
`;
