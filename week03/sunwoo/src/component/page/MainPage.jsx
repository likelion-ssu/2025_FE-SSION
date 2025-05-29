import React from "react";
import styled from "styled-components";
import PostList from "../list/PostList";

const MainContainer = styled.div`
  margin: 80px 150px;
`;

const WriteButton = styled.div`
  display: inline-block;
  padding: 5px 10px;
  background-color: #e5fad2;
  border: 1px solid #79d12c;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
`;

const MainPage = () => {
  return (
    <MainContainer>
      <h3 style={{ textAlign: "center" }}>황선우의 미니 블로그</h3>
      <div style={{ height: "50px" }} />
      <WriteButton>글 작성하기</WriteButton>
      <PostList />
    </MainContainer>
  );
};

export default MainPage;
