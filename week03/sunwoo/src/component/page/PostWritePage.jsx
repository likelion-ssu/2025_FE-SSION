import React from "react";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

const PostWritePage = () => {
  const nav = useNavigate();
  const moveBack = () => {
    nav("/");
  };

  return (
    <div>
      <Container>
        <Button title={"뒤로가기"} onClick={moveBack} />
        <TextInput height={38} placeholder={"제목을 입력하세요"} />
        <TextInput height={500} placeholder={"내용을 입력하세요"} />
        <Button title={"글 작성하기"} onClick={moveBack} />
      </Container>
    </div>
  );
};

export default PostWritePage;
