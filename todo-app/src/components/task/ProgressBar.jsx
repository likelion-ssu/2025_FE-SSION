import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 16px;
`;

const LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.2rem;
  margin-bottom: 6px;
`;

const LabelLeft = styled.span`
  color: #d8a54d;
`;

const LabelRight = styled.span`
  color: #3a8b5d;
`;

const BarBackground = styled.div`
  width: 100%;
  height: 18px;
  border-radius: 8px;
  background: #f0f0f0;
  overflow: hidden;
`;

const BarFill = styled.div`
  height: 100%;
  width: ${(props) => props.percent}%;
  background: linear-gradient(to right, #f3d174, #9ce18e);
  border-radius: 6px 0 0 6px;
  transition: width 0.3s ease;
`;

const PercentText = styled.p`
  text-align: center;
  margin-top: 6px;
  font-size: 1rem;
  color: #888;
`;

function ProgressBar({ total, done }) {
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  return (
    <Wrapper>
      <LabelRow>
        <LabelLeft>할 일 {total}개</LabelLeft>
        <LabelRight>완료 {done}개</LabelRight>
      </LabelRow>
      <BarBackground>
        <BarFill percent={percent} />
      </BarBackground>
      <PercentText>{percent}% 완료</PercentText>
    </Wrapper>
  );
}

export default ProgressBar;
