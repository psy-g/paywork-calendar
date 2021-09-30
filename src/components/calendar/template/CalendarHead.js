import React from 'react';
import styled from 'styled-components/macro';

const CalendarHead = () => {
  return (
    <HeadBlock>
      <span>2021.10</span>
      <span>선택</span>
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
