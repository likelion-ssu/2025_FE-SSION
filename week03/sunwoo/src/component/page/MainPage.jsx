import React from "react";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import CommentList from "../list/CommentList";
import { useNavigate } from "react-router-dom";
import data from "../../../data.json";

const MainPage = () => {
  const navigate = useNavigate();
  const moveWritePage = () => {
    navigate("/postWritePage");
  };

  const posts = data;

  return (
    <>
      <Button title="글 작성하기" onClick={moveWritePage} />
      <TextInput placeholder="글을 작성해 주세요.." />
      <PostList posts={posts} />
      <CommentList />
    </>
  );
};

export default MainPage;
