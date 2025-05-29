import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import CommentList from '../list/CommentList';
import TextInput from '../ui/TextInput';

import data from '../../data.json';

const Wrapper = styled.div`
  padding: 30px 100px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const PostContainer = styled.div`
  padding: 8px 30px;
  border: 3px solid cornflowerblue;
  border-radius: 8px;
  margin-top: 20px;
`;

const TitleText = styled.p`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 15px;
  margin-top: 20px;
`;

const ContentText = styled.p`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 20px;
`;

const CommentLabel = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 40px;
  margin-bottom: 20px;
  margin-left: 5px;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const StButton = styled.button`
  width: 150px;
  background-color: cornflowerblue;
  color: white;
  border-radius: 8px;
  border: none;
  padding: 8px;
  cursor: pointer;
`;

function CommentWrite() {
  const { postId } = useParams();

  const post = data.find(item => item.id == postId);

  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(post.comments);

  const handleAddComment = () => {
    if (!comment.trim()) return;

    const newComment = {
      id: Date.now(),
      content: comment,
    };

    setComments([...comments, newComment]);
    setComment('');
  };

  return (
    <Wrapper>
      <Container>
        <PostContainer>
          <TitleText>{post.title}</TitleText>
          <ContentText>{post.content}</ContentText>
        </PostContainer>

        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={comments} />
        <Box>
          <TextInput
            height={40}
            value={comment}
            onChange={event => {
              setComment(event.target.value);
            }}
          />
          <StButton onClick={handleAddComment}>댓글 작성하기</StButton>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default CommentWrite;
