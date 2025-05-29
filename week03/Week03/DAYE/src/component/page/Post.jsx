import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import PostList from '../list/PostList';
import data from '../../data.json';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 127px;
  margin-bottom: 20px;
  margin-top: 40px;
`;

const StyledButton = styled.button`
  width: 100px;
  padding: 8px;
  background-color: cornflowerblue;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

function Post() {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <ButtonWrapper>
        <StyledButton onClick={() => navigate('/postwrite')}>글 작성하기</StyledButton>
      </ButtonWrapper>
      <Container>
        <PostList
          posts={data}
          onClickItem={item => {
            navigate(`/post/${item.id}`);
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default Post;
