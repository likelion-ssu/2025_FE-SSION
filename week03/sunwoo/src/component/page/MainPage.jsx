import React from "react";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import { useNavigate } from "react-router-dom";
import data from "../../../data.json";
import { useState } from "react";

const MainPage = () => {
  const navigate = useNavigate();
  const moveWritePage = () => {
    navigate("/postWritePage");
  };

  const posts = data;

  const [searchPost, setSearchPost] = useState("");

  const filterdPost = posts.filter((post) =>
    post.title.toLowerCase().includes(searchPost.toLowerCase())
  );

  return (
    <>
      <TextInput
        height={38}
        onChange={(e) => setSearchPost(e.target.value)}
        placeholder={"검색어를 입력하세요.."}
      />
      <div style={{ marginBottom: "4px" }} />
      <Button title="글 작성하기" onClick={moveWritePage} />
      <PostList posts={filterdPost} />
    </>
  );
};

export default MainPage;
