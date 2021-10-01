import React from 'react';
import styled from 'styled-components/macro';

const CalendarItem = ({ data, changeState }) => {
  const { id, focus, today, thisMonth } = data;

  const handlerFocus = () => {
    changeState(id);
  };

  return (
    // <ItemBlock monthCheck={data[1]} focusCheck={data[2]} onClick={handlerFocus}>
    //   {data[0]}
    // </ItemBlock>
    <ItemBlock
      monthCheck={thisMonth}
      focusCheck={focus}
      todayCheck={today}
      onClick={handlerFocus}
    >
      {id}
    </ItemBlock>
  );
};

export default CalendarItem;

const ItemBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% / 7);
  /* padding: 15px; */
  /* text-align: center; */
  cursor: pointer;
  color: ${(props) => (props.monthCheck ? '#000000' : '#d5d5d6')};
  background-color: ${(props) => props.focusCheck && 'blue'};
  background-color: ${(props) => props.todayCheck && 'green'};
`;
