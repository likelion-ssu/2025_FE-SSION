import React from 'react';
import PostListItem from './PostListItem';
import styles from './PostList.module.css';

function PostList({ posts, onItemClick }) {
  return (
    <div className={styles.listContainer}>
      {posts.map((post) => (
        <PostListItem
          key={post.id}
          title={post.title}
          onClick={() => onItemClick(post)}
        />
      ))}
    </div>
  );
}

export default PostList;
