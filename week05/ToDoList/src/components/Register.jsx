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
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  color: white;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
`;

const FormContainer = styled.div`
  background-color: #f5f5f5;
  padding: 40px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 80px;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  color: #2c2c2c;
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

const RegisterButton = styled.button`
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

const BackButton = styled.button`
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

const ErrorMessage = styled.p`
  color: #d32f2f;
  font-size: 14px;
  margin-top: -15px;
  margin-bottom: 15px;
`;

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    passwordConfirm: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.id) {
      newErrors.id = 'ID를 입력해주세요';
    } else if (formData.id.length < 4) {
      newErrors.id = 'ID는 4자 이상이어야 합니다';
    }

    if (!formData.password) {
      newErrors.password = '비밀번호를 입력해주세요';
    } else if (formData.password.length < 6) {
      newErrors.password = '비밀번호는 6자 이상이어야 합니다';
    }

    if (formData.password !== formData.passwordConfirm) {
      newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        await todoApi.register({
          username: formData.id,
          password: formData.password
        });
        
        alert('회원가입이 완료되었습니다!');
        navigate('/login');
      } catch (error) {
        console.error('회원가입 오류:', error);
        if (error.response) {
          alert(`회원가입 실패: ${error.response.data.message || '다시 시도해주세요.'}`);
        } else {
          alert('서버 연결에 실패했습니다.');
        }
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBack = () => {
    navigate('/login');
  };

  return (
    <Container>
      <Title>회원 가입</Title>
      <FormContainer>
        <FormTitle>새 계정 만들기</FormTitle>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="ID"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
          />
          {errors.id && <ErrorMessage>{errors.id}</ErrorMessage>}
          
          <Input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          
          <Input
            type="password"
            placeholder="Password 확인"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleInputChange}
          />
          {errors.passwordConfirm && <ErrorMessage>{errors.passwordConfirm}</ErrorMessage>}
          
          <RegisterButton type="submit">
            회원가입
          </RegisterButton>
        </form>
        <BackButton onClick={handleBack}>
          로그인으로
        </BackButton>
        <ClearFix />
      </FormContainer>
    </Container>
  );
}

export default Register;