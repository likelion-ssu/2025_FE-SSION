import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import { format } from 'date-fns';
import { FiPlus, FiX, FiLogOut, FiTrash2, FiEdit2, FiSearch, FiCalendar } from 'react-icons/fi';
import todoApi from '../api/todoApi';
import 'react-calendar/dist/Calendar.css';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #2c2c2c;
  color: white;
  flex-direction: column;
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
  padding: 20px 40px 40px 40px;
  gap: 40px;
  flex: 1;
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
  flex-shrink: 0;
`;

const TodoContent = styled.span`
  flex: 1;
  font-size: 18px;
  text-decoration: ${props => props.checked ? 'line-through' : 'none'};
  color: ${props => props.checked ? '#666' : 'white'};
  cursor: pointer;
  
  &:hover {
    color: #aaa;
  }
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
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
`;

const ModalButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SaveButton = styled(ModalButton)`
  background-color: #4169e1;
  color: white;
  
  &:hover {
    background-color: #3050c0;
  }
`;

const DeleteButton = styled(ModalButton)`
  background-color: #d32f2f;
  color: white;
  margin-right: auto;

  &:hover {
    background-color: #b71c1c;
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

const SearchSectionContainer = styled.div`
  padding: 80px 40px 20px 40px;
  background-color: #2c2c2c;
  display: flex;
  flex-direction: row; 
  align-items: center; 
  gap: 20px;
  flex-wrap: wrap; 
`;

const SearchBar = styled.div`
  display: flex;
  gap: 10px;
  flex-grow: 1; 
  min-width: 300px; 
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid #555;
  background-color: #3a3a3a;
  color: white;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: #4169e1;
  }
`;

const SearchButton = styled.button`
  padding: 0 20px;
  border-radius: 8px;
  border: none;
  background-color: #4169e1;
  color: white;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #3050c0;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid #555;
  background-color: #3a3a3a;
  color: #ddd;
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap; 

  &:hover {
    background-color: #4a4a4a;
    border-color: #777;
  }
`;

function TodoList() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [viewMode, setViewMode] = useState('calendar');
  const [searchTitle, setSearchTitle] = useState('');
  
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const [newTodo, setNewTodo] = useState({ content: '', emoji: '😊' });
  const [editTodo, setEditTodo] = useState({ content: '', emoji: '' });

  const emojiOptions = ['😊', '😎', '🌸', '😸', '🍰', '🧸', '📚', '💻', '🎯', '✨'];

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const userId = localStorage.getItem('username');
        
        if (!userId) {
          navigate('/login');
          return;
        }
        
        const todos = await todoApi.getTodos(userId);
        setAllTodos(todos);
      } catch(e) {
        console.error("error", e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [navigate]);

  useEffect(() => {
    if (viewMode === 'calendar') {
      const dateString = format(selectedDate, 'yyyy-MM-dd');
      const filtered = allTodos.filter(todo => {
        const todoDate = format(new Date(todo.date), 'yyyy-MM-dd');
        return todoDate === dateString;
      });
      setTodos(filtered);
    }
  }, [selectedDate, allTodos, viewMode]);
  
  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      alert('검색어를 입력해주세요.');
      return;
    }
    setLoading(true);
    try {
      const userId = localStorage.getItem('username');
      const results = await todoApi.searchByKeyword(userId, searchQuery);
      setSearchResults(results);
      setSearchTitle(`'${searchQuery}' 검색 결과`);
      setViewMode('search');
    } catch (error) {
      console.error('검색 실패:', error);
      setSearchResults([]);
      setSearchTitle(`'${searchQuery}'에 대한 검색 결과가 없습니다.`);
    } finally {
      setLoading(false);
    }
  };

  const handleFilter = async (filterType) => {
    setLoading(true);
    try {
      const userId = localStorage.getItem('username');
      let results = [];
      if (filterType === 'checked') {
        results = await todoApi.getCheckedTodos(userId);
        setSearchTitle('완료된 할 일 목록');
      } else if (filterType === 'unchecked') {
        results = await todoApi.getUncheckedTodos(userId);
        setSearchTitle('미완료 할 일 목록');
      }
      setSearchResults(results);
      setViewMode('search');
    } catch (error) {
      console.error('필터링 실패:', error);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };
  
  const handleClearSearch = () => {
    setViewMode('calendar');
    setSearchQuery('');
    setSearchResults([]);
    setSearchTitle('');
  };

  const handleCheckboxChange = async (todoId, currentStatus) => {
  try {
    const userId = localStorage.getItem('username');
    //const userId = 100;
    const todoData = {
      is_checked: !currentStatus 
    };

    await todoApi.checkTodo(userId, todoId, todoData); 
    
    const updateList = (list) => list.map(todo => 
      todo.todo_id === todoId 
        ? { ...todo, is_checked: !currentStatus }
        : todo
    );
    
    setAllTodos(prev => updateList(prev));
    if (viewMode === 'search') {
      setSearchResults(prev => updateList(prev));
    }
  } catch (error) {
    console.error('Todo 체크 실패:', error);
    alert('체크 상태 변경에 실패했습니다.');
  }
};
  
  const handleUpdateTodo = async () => {
    if (!editTodo.content.trim()) {
      alert('할 일을 입력해주세요.');
      return;
    }
    try {
      const userId = localStorage.getItem('username');
      const todoId = currentTodo.todo_id;
      const todoData = {
        content: editTodo.content,
        emoji: editTodo.emoji
      };
      
      const updatedTodo = await todoApi.updateTodo(userId, todoId, todoData);

      const updateList = (list) => list.map(todo => 
        todo.todo_id === todoId ? updatedTodo : todo
      );
      
      setAllTodos(prev => updateList(prev));
      if (viewMode === 'search') {
        setSearchResults(prev => updateList(prev));
      }
      
      handleModalClose();
    } catch (error) {
      console.error('Todo 수정 실패:', error);
      alert('수정에 실패했습니다.');
    }
  };
  
  const handleDeleteTodo = async () => {
    try {
      const userId = localStorage.getItem('username');
      const todoId = currentTodo.todo_id;
      await todoApi.deleteTodo(userId, todoId);

      const updateList = (list) => list.filter(todo => todo.todo_id !== todoId);
      
      setAllTodos(prev => updateList(prev));
      if (viewMode === 'search') {
        setSearchResults(prev => updateList(prev));
      }

      handleModalClose();
    } catch (error) {
      console.error('Todo 삭제 실패:', error);
      alert('삭제에 실패했습니다.');
    }
  };

  const handleTodoClick = (todo) => {
    setCurrentTodo(todo);
    setEditTodo({ content: todo.content, emoji: todo.emoji });
    setShowEditModal(true);
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
      const userId = localStorage.getItem('username');
      const todoData = {
        date: selectedDate.toISOString(),
        content: newTodo.content,
        emoji: newTodo.emoji
      };
      
      const response = await todoApi.createTodo(userId, todoData);
      setAllTodos(prev => [...prev, response]);
      
      handleModalClose();
    } catch (error) {
      console.error('Todo 추가 실패:', error);
      alert('추가에 실패했습니다.');
    }
  };
  
  const handleModalClose = () => {
    setShowAddModal(false);
    setShowEditModal(false);
    setCurrentTodo(null);
    setNewTodo({ content: '', emoji: '😊' });
    setEditTodo({ content: '', emoji: '' });
  };
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('username');
    navigate('/login');
  };

  const tileContent = ({ date, view }) => {
    if (viewMode === 'calendar') {
      const dateString = format(date, 'yyyy-MM-dd');
      const hasTodo = allTodos.some(todo => format(new Date(todo.date), 'yyyy-MM-dd') === dateString);
      return hasTodo ? <TodoDot /> : null;
    }
    return null;
  };

  const formatDateTitle = (date) => {
    return `${date.getMonth() + 1}월 ${date.getDate()}일`;
  };

  const listToRender = viewMode === 'calendar' ? todos : searchResults;

  return (
    <Container>
      <Header>
        <Title>메인 화면</Title>
        <LogoutButton onClick={handleLogout}>
          <FiLogOut />
          로그아웃
        </LogoutButton>
      </Header>
      
      <SearchSectionContainer>
        <SearchBar>
          <SearchInput 
            type="text" 
            placeholder="할 일 내용 검색..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <SearchButton onClick={handleSearch}><FiSearch /> 검색</SearchButton>
        </SearchBar>
        <FilterButtons>
          <FilterButton onClick={() => handleFilter('checked')}>완료된 할 일</FilterButton>
          <FilterButton onClick={() => handleFilter('unchecked')}>미완료 할 일</FilterButton>
          {viewMode === 'search' && (
            <FilterButton onClick={handleClearSearch} style={{backgroundColor: '#4a4a4a', color: 'white'}}>
              <FiCalendar /> 달력 보기
            </FilterButton>
          )}
        </FilterButtons>
      </SearchSectionContainer>

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
          <DateTitle>
            {viewMode === 'calendar' ? formatDateTitle(selectedDate) : searchTitle}
          </DateTitle>
          
          <TodoListContainer>
            {loading ? (
              <EmptyMessage>로딩 중...</EmptyMessage>
            ) : listToRender.length === 0 ? (
              <EmptyMessage>
                {viewMode === 'search' ? '해당하는 결과가 없습니다.' : '할 일이 없습니다'}
              </EmptyMessage>
            ) : (
              listToRender.map(todo => (
                <TodoItem key={todo.todo_id}>
                  <Emoji>{todo.emoji}</Emoji>
                  <TodoContent 
                    checked={todo.is_checked}
                    onClick={() => handleTodoClick(todo)}
                  >
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
          
          {viewMode === 'calendar' && 
            <AddButton onClick={handleAddTodo}>
              <FiPlus />
            </AddButton>
          }
        </TodoSection>
      </MainContent>

      {showAddModal && (
        <ModalOverlay onClick={handleModalClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleModalClose}><FiX /></CloseButton>
            <ModalTitle><FiPlus /> 새 할 일 추가</ModalTitle>
            
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
            
            <ModalButtons style={{ justifyContent: 'flex-end' }}>
              <SaveButton onClick={handleSaveTodo}><FiPlus/> 추가</SaveButton>
            </ModalButtons>
          </ModalContent>
        </ModalOverlay>
      )}

      {showEditModal && currentTodo && (
        <ModalOverlay onClick={handleModalClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleModalClose}><FiX /></CloseButton>
            <ModalTitle><FiEdit2 /> 할 일 수정</ModalTitle>
            
            <ModalInput
              type="text"
              placeholder="할 일을 입력하세요"
              value={editTodo.content}
              onChange={(e) => setEditTodo({ ...editTodo, content: e.target.value })}
              autoFocus
            />
            
            <p style={{ marginBottom: '10px', color: '#999' }}>이모지 선택:</p>
            <EmojiContainer>
              {emojiOptions.map(emoji => (
                <EmojiButton
                  key={emoji}
                  selected={editTodo.emoji === emoji}
                  onClick={() => setEditTodo({ ...editTodo, emoji })}
                >
                  {emoji}
                </EmojiButton>
              ))}
            </EmojiContainer>
            
            <ModalButtons>
              <DeleteButton onClick={handleDeleteTodo}><FiTrash2 /> 삭제</DeleteButton>
              <SaveButton onClick={handleUpdateTodo}><FiEdit2 /> 저장</SaveButton>
            </ModalButtons>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}

export default TodoList;