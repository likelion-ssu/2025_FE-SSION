import { useState } from 'react';
import PostList from './component/list/postList';
import PostWrite from './component/page/postWrite';
import Post from './component/page/post';
import styled from 'styled-components';
import Button from './component/ui/Button';

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto; /* 중앙 정렬 */
  padding: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  `;

const PostDetail = styled.div`
  margin-top: 24px;
  text-align: left;
  padding: 16px;
  border-top: 1px solid #ccc;

  h2 {
    margin-bottom: 8px;
  }
`;


const App = () => {
  const [posts, setPosts] = useState([
  ]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [isWriting, setIsWriting] = useState(false);

  const handleSelectPost = (id) => {
    setSelectedPostId(id);
    setIsWriting(false);
  };

  const handleWriteClick = () => {
    setIsWriting(true);
    setSelectedPostId(null);
  };

  const handleAddPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: Date.now() }]);
    setIsWriting(false);
  };

  const backButton = () => {
    setIsWriting(false);
    setSelectedPostId(null);
  }

  const selectedPost = posts.find((post) => post.id === selectedPostId);

  return (
    <Wrapper>
      <h1>정안이의 블로그</h1>
      

      {isWriting ? (
        <>
        <PostWrite onSave={handleAddPost} />
        <Button onClick={backButton}>목록</Button>
        </>
      ) : selectedPost ? (
        <PostDetail>
        <Post post={selectedPost} />
        <Button onClick={backButton}>목록</Button>
        </PostDetail>
      ) : (
      <>
      <Button onClick={handleWriteClick} style={{ marginBottom: '16px' }}>
            글 작성
      </Button><PostList posts={posts} onSelectPost={handleSelectPost} />
      </>
      )}
    </Wrapper>
  );
};

export default App;
