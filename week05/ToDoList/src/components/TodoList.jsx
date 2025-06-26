import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import { format } from 'date-fns';
import { FiPlus, FiX, FiLogOut } from 'react-icons/fi';
import todoApi from '../api/todoApi';
import 'react-calendar/dist/Calendar.css';


const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #2c2c2c;
  color: white;
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #1a1a1a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  z-index: 100;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: normal;
  color: #999;
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:hover {
    color: white;
  }
`;

const MainContent = styled.div`
  display: flex;
  width: 100%;
  padding-top: 60px;
  margin: 40px;
  gap: 40px;
`;

const CalendarSection = styled.div`
  flex: 1;
  background-color: #3a3a3a;
  border-radius: 20px;
  padding: 30px;
  height: 600px;
  display: flex;
  flex-direction: column;
`;

const TodoSection = styled.div`
  flex: 1;
  background-color: #3a3a3a;
  border-radius: 20px;
  padding: 30px;
  position: relative;
  height: 600px;
  display: flex;
  flex-direction: column;
`;

const DateTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 30px;
  text-align: center;
`;

const TodoListContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 80px;
`;

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  padding: 15px;
  background-color: #2c2c2c;
  border-radius: 10px;
`;

const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const TodoContent = styled.span`
  flex: 1;
  font-size: 18px;
  text-decoration: ${props => props.checked ? 'line-through' : 'none'};
  color: ${props => props.checked ? '#666' : 'white'};
`;

const Emoji = styled.span`
  font-size: 24px;
`;

const AddButton = styled.button`
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #4a4a4a;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #5a5a5a;
  }
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: #666;
  font-size: 18px;
  margin-top: 50px;
`;

const StyledCalendar = styled(Calendar)`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  color: white;
  display: flex;
  flex-direction: column;
  
  .react-calendar__navigation {
    margin-bottom: 20px;
    
    button {
      color: white;
      font-size: 20px;
      background: none;
      
      &:hover {
        background-color: #4a4a4a;
      }
      
      &:disabled {
        background-color: transparent;
      }
    }
  }
  
  .react-calendar__viewContainer {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .react-calendar__month-view {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .react-calendar__month-view > div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .react-calendar__month-view > div > div {
    flex: 1;
  }
  
  .react-calendar__month-view__weekdays {
    text-align: center;
    font-size: 14px;
    color: #999;
    
    abbr {
      text-decoration: none;
    }
  }
  
  .react-calendar__tile {
    background: none;
    color: white;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    
    &:hover {
      background-color: #4a4a4a;
    }
    
    &--active {
      background-color: transparent;
      
      abbr {
        background-color: #4169e1;
        color: white;
        border-radius: 50%;
        padding: 8px;
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      &:hover {
        background-color: transparent;
      }
    }
    
    &--now {
    }
  }
`;

const TodoDot = styled.div`
  position: absolute;
  bottom: 8px;
  width: 6px;
  height: 6px;
  background-color: white;
  border-radius: 50%;
`;

// 모달 관련 스타일
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #3a3a3a;
  padding: 30px;
  border-radius: 15px;
  width: 400px;
  position: relative;
`;

const ModalTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const ModalInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid #666;
  background-color: transparent;
  color: white;
  font-size: 16px;
  outline: none;
  
  &::placeholder {
    color: #999;
  }
`;

const EmojiContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const EmojiButton = styled.button`
  font-size: 24px;
  background: none;
  border: 2px solid ${props => props.selected ? '#4169e1' : 'transparent'};
  border-radius: 8px;
  padding: 5px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    border-color: #4169e1;
  }
`;

const ModalButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

const ModalButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
`;

const SaveButton = styled(ModalButton)`
  background-color: #4169e1;
  color: white;
  
  &:hover {
    background-color: #3050c0;
  }
`;

const CancelButton = styled(ModalButton)`
  background-color: #4a4a4a;
  color: white;
  
  &:hover {
    background-color: #5a5a5a;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  
  &:hover {
    color: #999;
  }
`;

function TodoList() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTodo, setNewTodo] = useState({
    content: '',
    emoji: '😊'
  });

  const emojiOptions = ['😊', '😎', '🌸', '😸', '🍰', '🧸', '📚', '💻', '🎯', '✨'];

  // 모든 Todo 가져오기
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const userId = localStorage.getItem('userId');
        
        if (!userId) {
          navigate('/login');
          return;
        }
        
        const todos = await todoApi.getTodos(userId);
        console.log('Todos:', todos);
        setAllTodos(todos);
      } catch(e) {
        console.error("error", e);
        
        // 임시 데이터..
        const tempData = [
          {
            "todo_id": 1,
            "user": "minkyoung",
            "date": "2025-06-13T17:17:01Z",
            "content": "정안과 도서관가기",
            "is_checked": true,
            "emoji": "😎"
          },
          {
            "todo_id": 2,
            "user": "minkyoung",
            "date": "2025-06-16T06:00:00Z",
            "content": "해승과 리액트 공부하기",
            "is_checked": true,
            "emoji": "😁"
          },
          {
            "todo_id": 3,
            "user": "minkyoung",
            "date": "2025-06-19T12:00:00Z",
            "content": "예원과 동방 공부하기",
            "is_checked": true,
            "emoji": "🌸"
          },
          {
            "todo_id": 4,
            "user": "minkyoung",
            "date": "2025-06-21T17:17:56Z",
            "content": "다예와 산책하기",
            "is_checked": true,
            "emoji": "😸"
          },
          {
            "todo_id": 5,
            "user": "minkyoung",
            "date": "2025-06-23T12:00:00Z",
            "content": "선우와 케이크먹기",
            "is_checked": false,
            "emoji": "🍰"
          },
          {
            "todo_id": 6,
            "user": "minkyoung",
            "date": "2025-06-24T18:00:00Z",
            "content": "유경과 밤 새기",
            "is_checked": false,
            "emoji": "🧸"
          }
        ];
        setAllTodos(tempData);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [navigate]);


  useEffect(() => {
    filterTodosByDate();
  }, [selectedDate, allTodos]);

  const filterTodosByDate = () => {
    const dateString = format(selectedDate, 'yyyy-MM-dd');
    const filtered = allTodos.filter(todo => {
      const todoDate = format(new Date(todo.date), 'yyyy-MM-dd');
      return todoDate === dateString;
    });
    setTodos(filtered);
  };

  const handleCheckboxChange = async (todoId, currentStatus) => {
    try {
      const userId = localStorage.getItem('userId');
      
      await todoApi.checkTodo(userId, todoId);
      
      setAllTodos(prev => prev.map(todo => 
        todo.todo_id === todoId 
          ? { ...todo, is_checked: !currentStatus }
          : todo
      ));
    } catch (error) {
      console.error('Todo 업데이트 실패:', error);
      alert('체크 상태 변경에 실패했습니다.');
    }
  };

  const handleAddTodo = () => {
    setShowAddModal(true);
  };

  const handleSaveTodo = async () => {
    if (!newTodo.content.trim()) {
      alert('할 일을 입력해주세요.');
      return;
    }

    try {
      const userId = localStorage.getItem('userId');
      
      const todoData = {
        date: selectedDate.toISOString(),
        content: newTodo.content,
        emoji: newTodo.emoji
      };
      
      const response = await todoApi.createTodo(userId, todoData);
      
      setAllTodos(prev => [...prev, response]);
      
      setShowAddModal(false);
      setNewTodo({ content: '', emoji: '😊' });
      
      alert('할 일이 추가되었습니다!');
    } catch (error) {
      console.error('Todo 추가 실패:', error);
      if (error.response) {
        alert(`할 일 추가 실패: ${error.response.data.message || '다시 시도해주세요.'}`);
      } else {
        alert('서버 연결에 실패했습니다.');
      }
    }
  };

  const handleModalClose = () => {
    setShowAddModal(false);
    setNewTodo({ content: '', emoji: '😊' });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/login');
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const dateString = format(date, 'yyyy-MM-dd');
      const hasTodo = allTodos.some(todo => {
        const todoDate = format(new Date(todo.date), 'yyyy-MM-dd');
        return todoDate === dateString;
      });
      
      return hasTodo ? <TodoDot /> : null;
    }
  };

  const formatDateTitle = (date) => {
    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  return (
    <Container>
      <Header>
        <Title>메인 화면</Title>
        <LogoutButton onClick={handleLogout}>
          <FiLogOut />
          로그아웃
        </LogoutButton>
      </Header>
      
      <MainContent>
        <CalendarSection>
          <StyledCalendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileContent={tileContent}
            locale="ko-KR"
            formatDay={(locale, date) => format(date, 'd')}
          />
        </CalendarSection>
        
        <TodoSection>
          <DateTitle>{formatDateTitle(selectedDate)}</DateTitle>
          
          <TodoListContainer>
            {loading ? (
              <EmptyMessage>로딩 중...</EmptyMessage>
            ) : todos.length === 0 ? (
              <EmptyMessage>할 일이 없습니다</EmptyMessage>
            ) : (
              todos.map(todo => (
                <TodoItem key={todo.todo_id}>
                  <Emoji>{todo.emoji}</Emoji>
                  <TodoContent checked={todo.is_checked}>
                    {todo.content}
                  </TodoContent>
                  <Checkbox
                    type="checkbox"
                    checked={todo.is_checked}
                    onChange={() => handleCheckboxChange(todo.todo_id, todo.is_checked)}
                  />
                </TodoItem>
              ))
            )}
          </TodoListContainer>
          
          <AddButton onClick={handleAddTodo}>
            <FiPlus />
          </AddButton>
        </TodoSection>
      </MainContent>

      {showAddModal && (
        <ModalOverlay onClick={handleModalClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleModalClose}>
              <FiX />
            </CloseButton>
            <ModalTitle>새 할 일 추가</ModalTitle>
            
            <ModalInput
              type="text"
              placeholder="할 일을 입력하세요"
              value={newTodo.content}
              onChange={(e) => setNewTodo({ ...newTodo, content: e.target.value })}
              autoFocus
            />
            
            <p style={{ marginBottom: '10px', color: '#999' }}>이모지 선택:</p>
            <EmojiContainer>
              {emojiOptions.map(emoji => (
                <EmojiButton
                  key={emoji}
                  selected={newTodo.emoji === emoji}
                  onClick={() => setNewTodo({ ...newTodo, emoji })}
                >
                  {emoji}
                </EmojiButton>
              ))}
            </EmojiContainer>
            
            <ModalButtons>
              <CancelButton onClick={handleModalClose}>취소</CancelButton>
              <SaveButton onClick={handleSaveTodo}>저장</SaveButton>
            </ModalButtons>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}

export default TodoList;