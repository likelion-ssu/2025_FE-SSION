import { useState } from 'react';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';
import TextArea from '../ui/TextArea';
import styled from 'styled-components';

const FormWrapper = styled.form`
  width: 100%;
  max-width: 900px;       /* 💡 원하는 너비로 넓힘 */
  margin: 0 auto;         /* 중앙 정렬 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const PostWrite = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }
    onSave({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <TextInput
        type="text"
        placeholder="제목을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <TextArea
        placeholder="내용을 입력하세요"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={5}
        height = "500px"
        width = "1280px"
      />
      <Button type="submit" style={{ padding: '10px', fontSize: '16px' , width: '200px'}}>
        저장
      </Button>
    </FormWrapper>
  );
};

export default PostWrite;
