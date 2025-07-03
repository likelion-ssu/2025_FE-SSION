import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// API 서비스 객체
const todoApi = {
  // 회원가입
  register: async (userData) => {
    console.log(userData);
    const response = await axios.post(
      `${BASE_URL}/api/users/register/`,
      userData
    );
    return response.data;
  },

  // 로그인
  login: async (loginData) => {
    console.log(loginData);
    const response = await axios.post(
      `${BASE_URL}/api/users/login/`,
      loginData
    );
    return response.data;
  },

  // 전체 투두리스트 조회
  getTodos: async (userId) => {
    const response = await axios.get(`${BASE_URL}/api/todos/${userId}`);
    return response.data;
  },

  // 날짜별 투두리스트 조회
  getTodosByDate: async (userId, month, day) => {
    const response = await axios.get(
      `${BASE_URL}/api/todos/${userId}?month=${month}&day=${day}`
    );
    return response.data;
  },

  // 투두 작성
  createTodo: async (userId, todoData) => {
    console.log(userId);
    console.log(todoData);
    const response = await axios.post(
      `${BASE_URL}/api/todos/${userId}/`,
      todoData
    );
    return response.data;
  },

  // 투두 수정
  updateTodo: async (userId, todoId, todoData) => {
    const response = await axios.patch(
      `${BASE_URL}/api/todos/${userId}/${todoId}/`,
      todoData
    );
    return response.data;
  },

  // 투두 삭제
  deleteTodo: async (userId, todoId) => {
    const response = await axios.delete(
      `${BASE_URL}/api/todos/${userId}/${todoId}/`
    );
    return response.data;
  },

  // 투두 완료
  checkTodo: async (userId, todoId, todoData) => {
    const response = await axios.patch(
      `${BASE_URL}/api/todos/${userId}/${todoId}/check/`,
      todoData
    );
    return response.data;
  },

  // 투두 리뷰
  reviewTodo: async (userId, todoId, reviewData) => {
    const response = await axios.patch(
      `${BASE_URL}/api/todos/${userId}/${todoId}/reviews/`,
      reviewData
    );
    return response.data;
  },

  // 투두 검색
  searchByKeyword: async (userId, keyword) => {
    const response = await axios.get(`${BASE_URL}/api/todos/${userId}/search/${keyword}`);
    return response.data;
  },

  // Checked 투두 확인
  getCheckedTodos: async (userId) => {
    const response = await axios.get(`${BASE_URL}/api/todos/${userId}/checked/`);
    return response.data;
  },

  // Unchecked 투두 확인
  getUncheckedTodos: async (userId) => {
    const response = await axios.get(`${BASE_URL}/api/todos/${userId}/unchecked/`);
    return response.data;
  }
};



export default todoApi;
