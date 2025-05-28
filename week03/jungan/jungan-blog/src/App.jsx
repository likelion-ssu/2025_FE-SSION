import { useState } from 'react';
import PostList from './component/list/postList';
import PostWrite from './component/page/postWrite';
import BackButton from './component/ui/BackButton';
import Post from './component/page/post';

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
    <div style={{ padding: '24px' }}>
      <h1>정안이의 블로그</h1>
      

      {isWriting ? (
        <>
        <PostWrite onSave={handleAddPost} />
        <button onClick={backButton}>목록</button>
        </>
      ) : selectedPost ? (
        <>
        <Post post={selectedPost} />
        <button onClick={backButton}>목록</button>
        </>
      ) : (
      <>
      <button onClick={handleWriteClick} style={{ marginBottom: '16px' }}>
            글 작성
      </button><PostList posts={posts} onSelectPost={handleSelectPost} />
      </>
      )}
    </div>
  );
};

export default App;
