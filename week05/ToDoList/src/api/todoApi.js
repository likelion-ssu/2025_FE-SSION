// src/api/todoApi.js
import axios from 'axios';

const BASE_URL = 'http://ec2-13-124-6-127.ap-northeast-2.compute.amazonaws.com:8000';

// API 서비스 객체
const todoApi = {
  // 회원가입
  register: async (userData) => {
    const response = await axios.post(`${BASE_URL}/api/users/register/`, userData);
    return response.data;
  },

  // 로그인
  login: async (loginData) => {
    const response = await axios.post(`${BASE_URL}/api/users/login/`, loginData);
    return response.data;
  },

  // 전체 투두리스트 조회
  getTodos: async (userId) => {
    const response = await axios.get(`${BASE_URL}/api/todos/${userId}`);
    return response.data;
  },

  // 날짜별 투두리스트 조회
  getTodosByDate: async (userId, month, day) => {
    const response = await axios.get(`${BASE_URL}/api/todos/${userId}?month=${month}&day=${day}`);
    return response.data;
  },

  // 투두 작성
  createTodo: async (userId, todoData) => {
    const response = await axios.post(`${BASE_URL}/api/todos/${userId}`, todoData);
    return response.data;
  },

  // 투두 수정
  updateTodo: async (userId, todoId, todoData) => {
    const response = await axios.patch(`${BASE_URL}/api/todos/${userId}/${todoId}`, todoData);
    return response.data;
  },

  // 투두 삭제
  deleteTodo: async (userId, todoId) => {
    const response = await axios.delete(`${BASE_URL}/api/todos/${userId}/${todoId}`);
    return response.data;
  },

  // 투두 완료
  checkTodo: async (userId, todoId) => {
    const response = await axios.patch(`${BASE_URL}/api/todos/${userId}/${todoId}/check`);
    return response.data;
  },

  // 투두 리뷰
  reviewTodo: async (userId, todoId, reviewData) => {
    const response = await axios.patch(`${BASE_URL}/api/todos/${userId}/${todoId}/reviews`, reviewData);
    return response.data;
  }
};

export default todoApi;