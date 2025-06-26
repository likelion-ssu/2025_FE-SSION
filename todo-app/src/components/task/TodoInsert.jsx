import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Input = styled.input`
  flex: 1;
  font-size: 1rem;
  padding: 6px;
  border: 1px solid #ffdda9;
  border-radius: 4px 0 0 4px;
`;

const Button = styled.button`
  padding: 6px 12px;
  background: #f3b763;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 0 4px 4px 0;
  font-size: 1.2rem;
`;

function TodoInsert({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <Wrapper>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일을 입력하세요"
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <Button onClick={handleAdd}>추가</Button>
    </Wrapper>
  );
}

export default TodoInsert;
