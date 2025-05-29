import React from "react";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import CommentList from "../list/CommentList";

const MainContainer = styled.div`
  margin: 80px 150px;
`;

const MainPage = () => {
  return (
    <MainContainer>
      <h3 style={{ textAlign: "center" }}>블로그</h3>
      <div style={{ height: "50px" }} />
      <Button title="글 작성하기"></Button>
      <TextInput placeholder="글을 작성해 주세요.." />
      <PostList />
      <CommentList></CommentList>
    </MainContainer>
  );
};

export default MainPage;
