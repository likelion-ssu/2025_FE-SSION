import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import styled from "styled-components";

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 32px;
`;

export default function PostWritePage({ setPosts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newPost = {
      id: Date.now(),
      title,
      content,
      comments: [],
    };
    setPosts((prev) => [newPost, ...prev]);
    navigate("/");
  };

  return (
    <Container>
      <h2>글 작성하기</h2>
      <TextInput
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목"
      />
      <TextInput
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용"
        height={200}
      />
      <Button onClick={handleSubmit}>작성 완료</Button>
    </Container>
  );
}
