import React, { useEffect, useState } from "react";
import TodoListItem from "./TodoListItem";
import TodoInsert from "./TodoInsert";
import ProgressBar from "./ProgressBar";
import styled from "styled-components";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import axios from "axios";

const Wrapper = styled.div`
  margin-bottom: 30px;
`;
const TodoWrapper = styled.div`
  max-height: 227.5px;
  overflow-y: auto;
`;

function TodoList({ selectedDate }) {
  const [todos, setTodos] = useState([]);
  const userId = parseInt(localStorage.getItem("user_id"));

  // done, total 계산
  const total = todos.length;
  const done = todos.filter((todo) => todo.done).length;

  const fetchTodo = async () => {
    if (!userId || !selectedDate) return;

    const month = selectedDate.getMonth() + 1;
    const day = selectedDate.getDate();

    try {
      const res = await axios.get(
        `${BASE_URL}/api/todos/${userId}?month=${month}&day=${day}`
      );

      const todoData = res.data.map((item) => ({
        id: item.todo_id,
        text: item.content,
        done: item.is_checked,
      }));

      setTodos(todoData);
    } catch (error) {
      alert("투두 불러오기 실패", error);
    }
  };

  // 할 일 추가
  const handleAdd = async (text) => {
    try {
      // 날짜 형식 맞추기(이거 안쓰면 안됨)
      const isoDate = selectedDate.toLocaleDateString("sv-SE");

      const res = await axios.post(
        `${BASE_URL}/api/todos/${userId}`,
        {
          content: text,
          date: isoDate,
          is_checked: false,
          emoji: "",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Todo added successfully:", res.data);

      // 추가 완료 후 다시 목록 조회(GET)
      await fetchTodo();
    } catch (error) {
      console.error("할 일 추가 실패:", error);
      alert("할 일 추가 중 오류가 발생했어요.");
    }
  };

  useEffect(() => {
    fetchTodo();
  }, [selectedDate]);

  // 여기부터 API 연동 해야함
  // 체크박스 눌렀을 때(아직 작업 X)
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
