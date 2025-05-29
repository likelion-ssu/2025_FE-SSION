import React from 'react';
import styles from './PostListItem.module.css';

function PostListItem({ title, onClick }) {
  return (
    <div className={styles.item} onClick={onClick}>
      {title}
    </div>
  );
}

export default PostListItem;
