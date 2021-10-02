import React from 'react';
import styled from 'styled-components/macro';

const CalendarItem = ({ data, changeFocus, setFocus, changeDate }) => {
  const { id, focus, month, today, thisMonth } = data;

  const handlerFocus = () => {
    if (!thisMonth) {
      if (id < 7) {
        setFocus(month, id);
        changeDate(+1);
      } else {
        setFocus(month, id);
        changeDate(-1);
      }
    } else changeFocus(id);
  };

  return (
    <>
      <ItemBlock
        monthCheck={thisMonth}
        focusCheck={focus}
        todayCheck={today}
        onClick={handlerFocus}
      >
        {id}
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
  color: ${(props) => props.todayCheck && '#fafafa'};
  /* background-color: ${(props) => props.focusCheck && 'blue'}; */
  /* background-color: ${(props) => props.todayCheck && 'green'}; */
`;

const Circle = styled.div`
  position: absolute;
  background-color: ${(props) => props.focusCheck && '#B8B8B8'};
  background-color: ${(props) => props.todayCheck && '#30a9de'};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: -10;
`;
