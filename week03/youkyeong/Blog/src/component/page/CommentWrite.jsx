import { useState } from "react";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 24px;
`;

export default function CommentWrite({ onSubmit }) {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (comment.trim()) {
      onSubmit(comment);
      setComment("");
    }
  };

  return (
    <Wrapper>
      <TextInput
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="댓글 내용 입력"
      />
      <Button onClick={handleSubmit}>댓글 작성 완료</Button>
    </Wrapper>
  );
}
