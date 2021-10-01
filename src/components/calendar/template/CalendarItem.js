import React from 'react';
import styled from 'styled-components/macro';

const CalendarItem = ({ data, changeFocus, changeDate }) => {
  const { id, focus, today, thisMonth } = data;

  const handlerFocus = () => {
    if (thisMonth) changeFocus(id);
    else {
      if (id < 7) {
        changeDate(+1);
        // changeFocus(id);
      } else {
        changeDate(-1);
        // changeFocus(id);
      }
    }

    // if (thisMonth) changeState(id);
    // else {
    //   if (id < 7) {
    //     saveState(+1);
    //     changeState(id);
    //   } else {
    //     saveState(-1);
    //     changeState(id);
    //   }
    // }
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
