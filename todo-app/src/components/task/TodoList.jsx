import React, { useState } from "react";
import TodoListItem from "./TodoListItem";
import TodoInsert from "./TodoInsert";
import ProgressBar from "./ProgressBar";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 30px;
`;
const TodoWrapper = styled.div`
  max-height: 227.5px;
  overflow-y: auto;
`;

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "방 청소하기", done: false },
    { id: 2, text: "헬스장 가기", done: false },
    { id: 3, text: "책 읽기", done: true },
  ]);

  // done, total 계산
  const total = todos.length;
  const done = todos.filter((todo) => todo.done).length;

  // 추가
  const handleAdd = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      done: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  // 체크박스 눌렀을 때
  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  // 수정
  const handleEdit = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  // 삭제
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <Wrapper>
      {/* 진행률 바 */}
      <ProgressBar total={total} done={done} />

      {/*할 일 목록 */}
      <TodoWrapper>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </TodoWrapper>
      {/* 입력 */}
      <TodoInsert onAdd={handleAdd} />
    </Wrapper>
  );
}

export default TodoList;
