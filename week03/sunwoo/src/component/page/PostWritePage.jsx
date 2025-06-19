import React from "react";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const PostWritePage = () => {
  const nav = useNavigate();
  const moveBack = () => {
    nav("/");
  };

  return (
    <div>
      <Button title={"뒤로가기"} onClick={moveBack} />
      <div style={{ height: "10px" }} />
      <TextInput height={38} placeholder={"제목을 입력하세요"} />
      <TextInput height={500} placeholder={"내용을 입력하세요"} />
    </div>
  );
};

export default PostWritePage;
