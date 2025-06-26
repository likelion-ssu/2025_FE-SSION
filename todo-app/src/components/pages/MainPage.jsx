import React, { useState } from "react";
import Task from "../task/Task";
import styled from "styled-components";
import CalendarSection from "../calendar/CalendarSection";

const Wrapper = styled.div`
  height: 100vh;
`;
const MainWrapper = styled.div`
  display: flex;
  background-color: #fff9ef;
  padding-top: 30px;
  justify-content: center;
  min-height: 100vh;
`;

const Logo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: #fffbf5;
`;

const LogoText = styled.p`
  font-size: 25px;
  font-weight: 500;
`;

const Img = styled.img`
  width: 45px;
`;

function MainPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <Wrapper>
      <Logo>
        <Img src="/logo.png" alt="로고" />
        <LogoText>오늘도</LogoText>
      </Logo>
      <MainWrapper>
        {/* 왼쪽: 달력 */}
        <CalendarSection
          selectedDate={selectedDate}
          onChange={setSelectedDate}
        />

        {/* 오른쪽: 선택된 날짜의 할 일 + 감정 */}
        <Task selectedDate={selectedDate} />
      </MainWrapper>
    </Wrapper>
  );
}

export default MainPage;
