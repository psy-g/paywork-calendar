import React from 'react';
import styled from 'styled-components/macro';

import CalendarItem from 'components/calendar/template/CalendarItem';

const CalendarBody = ({ checkState, changeFocus, setFocus, changeDate }) => {
  const dayArr = ['월', '화', '수', '목', '금', '토', '일'];

  return (
    <BodyBlock>
      <DaysWrapper>
        {dayArr.map((ele, idx) => (
          <span key={idx}>{ele}</span>
        ))}
      </DaysWrapper>
      <DatesWrapper>
        {checkState.map((ele, idx) => (
          <CalendarItem
            key={idx}
            data={ele}
            changeDate={changeDate}
            changeFocus={changeFocus}
            setFocus={setFocus}
          />
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const DatesWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 90%;
`;
