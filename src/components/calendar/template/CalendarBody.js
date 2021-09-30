import React from 'react';
import styled from 'styled-components/macro';

const CalendarBody = () => {
  const dateArr = [
    30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3,
  ];

  return (
    <BodyBlock>
      <DaysWrapper>
        <span>월</span>
        <span>화</span>
        <span>수</span>
        <span>목</span>
        <span>금</span>
        <span>토</span>
        <span>일</span>
      </DaysWrapper>
      <DatesWrapper>
        {dateArr.map((ele, idx) => (
          <Date key={idx}>{ele}</Date>
        ))}
      </DatesWrapper>
    </BodyBlock>
  );
};

export default CalendarBody;

const BodyBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 85%;
`;

const DaysWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0 15px 0;
  height: 10%;

  span {
    width: calc(100% / 7);
    text-align: center;
  }
`;

const DatesWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 90%;
`;

const Date = styled.div`
  width: calc(100% / 7);
  padding: 15px;
  text-align: center;
`;
