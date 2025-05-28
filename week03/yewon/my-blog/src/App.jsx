import { useState } from 'react';
import PostWrite from './components/PostWrite';
import PostList from './components/PostList';
import Post from './components/Post';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 32px;
`;

const SectionTitle = styled.h2`
  margin: 40px 0 16px;
`;

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPostIdx, setSelectedPostIdx] = useState(null);

  const addPost = (newPost) => {
    setPosts([...posts, { ...newPost, comments: [] }]);
  };

  const addComment = (comment) => {
    const updatedPosts = posts.map((post, i) =>
      i === selectedPostIdx ? {
        ...post,
        comments: [...post.comments, comment]
      } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div style={{ padding: '20px' }}>
      <Title>나만의 블로그 ✍️</Title>
      {selectedPostIdx === null ? (
        <>
          <PostWrite onAddPost={addPost} />
          <hr />
          <PostList posts={posts} onSelect={setSelectedPostIdx} />
        </>
      ) : (
        <Post
          post={posts[selectedPostIdx]}
          onBack={() => setSelectedPostIdx(null)}
          onAddComment={addComment}
        />
      )}
    </div>
  );
}

export default App;
