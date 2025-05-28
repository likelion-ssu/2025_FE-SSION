import styled from 'styled-components';
import CommentList from './CommentList';
import CommentWrite from './CommentWrite';

const PostContainer = styled.div`
  background-color: white;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  margin-top: 24px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 12px;
  color: #333;
`;

const Content = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
  line-height: 1.5;
`;

const BackButton = styled.button`
  background-color: #888;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
    background-color: #007bff;
  }
`;

function Post({ post, onBack, onAddComment }) {
  return (
    <PostContainer>
      <Title>{post.title}</Title>
      <Content>{post.content}</Content>
      <BackButton onClick={onBack}>← 목록으로</BackButton>
      <hr style={{ margin: '24px 0' }} />
      <CommentList comments={post.comments} />
      <CommentWrite onAddComment={onAddComment} />
    </PostContainer>
  );
}

export default Post;
