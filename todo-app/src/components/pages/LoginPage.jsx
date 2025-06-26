import { React, useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import InfoInput from "../ui/InfoInput";
import { useNavigate } from "react-router-dom";
const BASE_URL = import.meta.env.VITE_BASE_URL;
import axios from "axios";

const Wrapper = styled.div`
  background-color: #fff9ef;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Upper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

const Container = styled.div`
  background-color: white;
  color: black;
  width: 800px;
  height: 500px;
  border: 1px solid #b9b9b9;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 16px 0px;
  align-items: center;
  justify-content: center;
`;

const Logintext = styled.p`
  font-size: 22px;
  font-weight: 500;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 14px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.p`
  font-size: 27px;
  font-weight: 500;
`;
const Img = styled.img`
  width: 50px;
`;

const Mention = styled.p`
  font-size: 21px;
`;

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/api/users/login/`, {
        username,
        password,
      });

      const userId = res.data.user_id;
      localStorage.setItem("user_id", userId);
      alert("로그인 성공!");
      navigate("/main-page");
    } catch (error) {
      alert("로그인 실패");
      console.log(error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter") handleLogin();
  };

  return (
    <Wrapper>
      <Upper>
        <Logo>
          <Img src="/logo.png" alt="로고" />
          <LogoText>오늘도</LogoText>
        </Logo>
        <Mention>오늘도, 마음과 할 일을 함께 기록해요.</Mention>
      </Upper>
      <Container>
        <InputGroup>
          <Logintext>아이디</Logintext>
          <InfoInput
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="아이디를 입력하세요"
          />
        </InputGroup>
        <InputGroup>
          <Logintext>비밀번호</Logintext>
          <InfoInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="비밀번호를 입력하세요"
          />
        </InputGroup>
        <Button
          title="로그인"
          backgroundColor="#ffdda9"
          onClick={handleLogin}
        />
        <Button
          title="회원가입"
          onClick={() => {
            navigate("/sign-up");
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default LoginPage;
