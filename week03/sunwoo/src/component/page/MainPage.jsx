import React from "react";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
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
      <PostList posts={posts} />
    </>
  );
};

export default MainPage;
