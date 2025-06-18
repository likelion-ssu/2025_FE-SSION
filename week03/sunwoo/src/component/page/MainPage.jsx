import React from "react";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import CommentList from "../list/CommentList";

const MainPage = () => {
  return (
    <>
      <Button title="글 작성하기"></Button>
      <TextInput placeholder="글을 작성해 주세요.." />
      <PostList />
      <CommentList />
    </>
  );
};

export default MainPage;
