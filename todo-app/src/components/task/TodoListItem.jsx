import React, { useState } from "react";
import styled from "styled-components";

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
`;

const CheckboxWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

// 체크박스 디자인을 위해 숨김 처리
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  display: none;
`;

const StyledCheckbox = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  background: ${(props) => (props.checked ? "#00c853" : "white")};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  transition: all 0.2s; // 애니메이션 속성
`;

const TodoText = styled.span`
  flex: 1;
  font-size: 1.2rem;
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
  color: ${(props) => (props.done ? "#bbb" : "#333")};
`;

const EditInput = styled.input`
  flex: 1;
  font-size: 1rem;
  padding: 4px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const IconButton = styled.button`
  background-color: #fff9ef;
  border: 1px solid #ddd;
  border-radius: 7px;
  font-size: 1.2rem;
  cursor: pointer;
`;

function TodoItem({ todo, onToggle, onEdit, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEditConfirm = () => {
    onEdit(todo.id, editText);
    setEditing(false);
  };

  return (
    <ItemWrapper>
      <CheckboxWrapper>
        <HiddenCheckbox
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        <StyledCheckbox checked={todo.done}>{todo.done && "✔"}</StyledCheckbox>
      </CheckboxWrapper>

      {editing ? (
        <EditInput
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleEditConfirm()}
        />
      ) : (
        <TodoText done={todo.done}>{todo.text}</TodoText>
      )}

      {editing ? (
        <IconButton onClick={handleEditConfirm}>완료</IconButton>
      ) : (
        <IconButton onClick={() => setEditing(true)}>수정</IconButton>
      )}
      <IconButton onClick={() => onDelete(todo.id)}>삭제</IconButton>
    </ItemWrapper>
  );
}

export default TodoItem;
