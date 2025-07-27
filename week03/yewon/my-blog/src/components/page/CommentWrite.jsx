import { useState } from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  margin-top: 16px;
`;

const Input = styled.input`
  width: 280px;
  padding: 8px;
  font-size: 14px;
  margin-right: 8px;
`;

const Button = styled.button`
  padding: 8px 12px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

function CommentWrite({ onAddComment }) {
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (!comment) return;
    onAddComment(comment);
    setComment('');
  };

  return (
    <InputContainer>
      <Input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="댓글 입력"
      />
      <Button onClick={handleSubmit}>작성</Button>
    </InputContainer>
  );
}

export default CommentWrite;
