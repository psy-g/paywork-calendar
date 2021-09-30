import React from 'react';
import styled from 'styled-components/macro';

const CalendarItem = ({ data }) => {
  return <ItemBlock check={data[1]}>{data[0]}</ItemBlock>;
};

export default CalendarItem;

const ItemBlock = styled.div`
  width: calc(100% / 7);
  padding: 15px;
  text-align: center;
  color: ${(props) => (props.check ? '#000000' : '#d5d5d6')};
`;
