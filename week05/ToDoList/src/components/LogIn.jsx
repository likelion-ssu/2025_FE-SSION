import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import todoApi from '../api/todoApi';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #3a3a3a;
  position: relative;
  margin: 0;
  padding: 0;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  color: white;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
`;

const FormContainer = styled.div`
  background-color: #f5f5f5;
  padding: 40px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid #ddd;
  background-color: transparent;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
  
  &::placeholder {
    color: #999;
  }
  
  &:focus {
    border-bottom-color: #666;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #2c2c2c;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 15px;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #1a1a1a;
  }
`;

const SignupButton = styled.button`
  padding: 10px 20px;
  background-color: #4a4a4a;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  float: right;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #3a3a3a;
  }
`;

const ClearFix = styled.div`
  clear: both;
`;

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await todoApi.login({
        username: formData.id,
        password: formData.password
      });
      
      localStorage.setItem('username', response.user_id);
      localStorage.setItem('token', response.token || 'logged-in');
      
      alert('로그인 성공!');
      navigate('/todos');
    } catch (error) {
      console.error('로그인 오류:', error);
      if (error.response) {
        alert(`로그인 실패: ${error.response.data.message || '아이디 또는 비밀번호를 확인해주세요.'}`);
      } else {
        alert('서버 연결에 실패했습니다.');
      }
    }
  };

  const handleSignup = () => {
    navigate('/register');
  };

  return (
    <Container>
      <Title>할일 하자</Title>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="ID"
            value={formData.id}
            onChange={(e) => setFormData({...formData, id: e.target.value})}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />
          <LoginButton type="submit">
            로그인
          </LoginButton>
        </form>
        <SignupButton onClick={handleSignup}>
          회원가입
        </SignupButton>
        <ClearFix />
      </FormContainer>
    </Container>
  );
}

export default Login;