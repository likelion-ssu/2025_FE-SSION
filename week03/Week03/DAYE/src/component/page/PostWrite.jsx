import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import TextInput from '../ui/TextInput';

const Wrapper = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const Container = styled.div`
  padding-top: 40px;
`;

const StButton = styled.button`
  width: 100px;
  background-color: cornflowerblue;
  color: white;
  border-radius: 8px;
  border: none;
  padding: 8px;
  cursor: pointer;
`;

function PostWrite() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <Wrapper>
      <Container>
        <h2>Title</h2>
        <TextInput
          height={40}
          value={title}
          onChange={event => {
            setTitle(event.target.value);
          }}
        />
      </Container>
      <Container>
        <h2>Content</h2>
        <TextInput
          width={1520}
          height={300}
          value={content}
          onChange={event => {
            setContent(event.target.value);
          }}
        />
      </Container>
      <StButton>저장</StButton>
    </Wrapper>
  );
}

export default PostWrite;
