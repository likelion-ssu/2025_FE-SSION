import React from "react";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";

const MainContainer = styled.div`
  margin: 80px 150px;
`;

const MainPage = () => {
  return (
    <MainContainer>
      <h3 style={{ textAlign: "center" }}>황선우의 미니 블로그</h3>
      <div style={{ height: "50px" }} />
      <Button title="글 작성하기"></Button>
      <PostList />
    </MainContainer>
  );
};

export default MainPage;
