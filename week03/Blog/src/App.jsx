import React, { useState } from 'react';
import './styles/react.css';
import Button from './component/ui/Button';
import PostList from './component/list/PostList';
import Post from './component/page/Post';
import PostWrite from './component/page/PostWritePage';
import styles from './styles/App.module.css';

function App() {
  const [input, setInput] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [isWriting, setIsWriting] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: '프론트엔드를 하기에 갈 길이 멀어요',
      content: 'js, css, html, react, node.js, 등등 너무 많은 것들을 배워야 해요',
      comments: [
        { id: 1, text: '저도 공부할게 많아요' },
        { id: 2, text: 'css가 말썽꾸러기에요' },
      ],
    },
    { id: 2, title: '디자인이 원하는 대로 안만들어져요', content: '종강하면 하루 종일 프론트 공부만 열심히 해야겠어요',
      comments: [
        { id: 3, text: 'ai가 없던 시절 개발자들은 어떻게 프로그래밍을 했을까요' },
        { id: 4, text: '24시간이 부족해요' },
        { id: 5, text: '사자의 서재 만드신 운영진 분들이 너무 멋있어요' },
      ],
    },
  ]);

  const handleAddPost = (newPost) => {
    setPosts([...posts, { id: Date.now(), ...newPost }]);
    setIsWriting(false);
  };

  const handleAddComment = (commentText) => {
    setPosts(
      posts.map((post) =>
        post.id === selectedPost.id
          ? {
              ...post,
              comments: [
                ...(post.comments || []),
                { id: Date.now(), text: commentText },
              ],
            }
          : post,
      ),
    );
    setSelectedPost({
      ...selectedPost,
      comments: [
        ...(selectedPost.comments || []),
        { id: Date.now(), text: commentText },
      ],
    });
  };

  return (
    <div className={styles.container}>
      {!selectedPost && !isWriting && (
        <>
          <div className={styles.headerArea}>
            <h2 className={styles.title}>블로그</h2>
          </div>
          <div className={styles.buttonArea}>
            <Button onClick={() => setIsWriting(true)}>글 작성</Button>
          </div>
          <PostList posts={posts} onItemClick={setSelectedPost} />
        </>
      )}

      {isWriting && (
        <PostWrite
          onSubmit={handleAddPost}
          onCancel={() => setIsWriting(false)}
        />
      )}

      {selectedPost && !isWriting && (
        <Post
          post={selectedPost}
          onBack={() => setSelectedPost(null)}
          onAddComment={handleAddComment}
        />
      )}
    </div>
  );
}

export default App;
