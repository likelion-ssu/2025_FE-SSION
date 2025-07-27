import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h2`
  margin: 0 0 16px;
`;

const Input = styled.input`
  width: 300px;
  padding: 8px;
  margin-bottom: 8px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 300px;
  height: 80px;
  padding: 8px;
  font-size: 16px;
  margin-bottom: 8px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function PostWrite({ onAddPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!title || !content) return;
    onAddPost({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <Container>
      <SectionTitle>✏️ 글 작성</SectionTitle>
      <Input
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <TextArea
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <Button onClick={handleSubmit}>등록</Button>
    </Container>
  );
}

export default PostWrite;
