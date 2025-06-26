// 오른쪽 section 전체
import React, { useState } from "react";
import TodoList from "./TodoList";
import Emoticons from "./Emoticons";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 500px;
  max-width: 100%;
  max-height: 578px;
  border: 1px solid #c7c7c7;
  background-color: white;
  border-radius: 10px;
  line-height: 1.125em;
  color: #5a3e2b;
  padding: 5px 20px;
  margin: 15px;
`;

function Task({ selectedDate }) {
  const [selectedMood, setSelectedMood] = useState(null);

  const dateStr = selectedDate.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  });

  const userId = localStorage.getItem("user_id");

  return (
    <Wrapper>
      <h2 style={{ fontSize: "1.4rem", marginBottom: "12px" }}>{dateStr}</h2>

      {/* 할 일 목록 */}
      <TodoList userId={userId} selectedDate={selectedDate} />
      {/* 감정 표시 */}
      {selectedMood && (
        <p style={{ fontSize: "1.3rem", marginTop: "20px" }}>
          오늘의 기분: {selectedMood}
        </p>
      )}

      {/* 감정 선택 */}
      <Emoticons selected={selectedMood} onSelect={setSelectedMood} />
    </Wrapper>
  );
}

export default Task;
