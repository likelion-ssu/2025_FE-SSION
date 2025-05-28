import styled from 'styled-components';

const ListContainer = styled.div`
  margin-top: 24px;
`;

const SectionTitle = styled.h2`
  margin: 40px 0 16px;
`;

const PostItem = styled.div`
  border: 1px solid #ddd;
  padding: 12px 16px;
  margin-bottom: 10px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    background-color: #f7f7f7;
  }
`;

function PostList({ posts, onSelect }) {
  return (
    <ListContainer>
      <SectionTitle>📚 글 목록</SectionTitle>
      {posts.length === 0 && <p>작성된 글이 없습니다.</p>}
      {posts.map((post, idx) => (
        <PostItem key={idx} onClick={() => onSelect(idx)}>
          {post.title}
        </PostItem>
      ))}
    </ListContainer>
  );
}

export default PostList;
