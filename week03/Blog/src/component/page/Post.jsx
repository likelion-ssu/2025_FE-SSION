import React, { useState } from 'react';
import CommentList from '../list/CommentList';
import styles from './Post.module.css';
import appStyles from '../../styles/App.module.css';
import PropTypes from 'prop-types';
import TextInput from '../ui/TextInput';
import Button from '../ui/Button';

function Post({ post, onBack, onAddComment }) {
  const [comment, setComment] = useState('');
  if (!post) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    onAddComment(comment);
    setComment('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.topArea}>
        <h2 className={styles.title}>{post.title}</h2>
        <p className={styles.content}>{post.content}</p>
        <div className={styles.buttonArea}>
          <button className={styles.backButton} onClick={onBack}>
            목록으로
          </button>
        </div>
      </div>
      <div className={styles.commentArea}>
        <CommentList comments={post.comments || []} />
        <form className={appStyles.commentWriteForm} onSubmit={handleSubmit}>
          <div className={appStyles.inputWrapper}>
            <TextInput
              className={appStyles.commentInput}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="댓글을 입력하세요"
            />
          </div>
          <div className={appStyles.buttonWrapper}>
            <Button type="submit" className={appStyles.commentSubmitButton}>
              댓글 작성
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    comments: PropTypes.array,
  }),
  onBack: PropTypes.func,
  onAddComment: PropTypes.func,
};

export default Post;
