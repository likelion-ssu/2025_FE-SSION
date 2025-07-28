import React, { useState } from 'react';
import Button from '../ui/Button';
import TextInput from '../ui/TextInput';
import styles from './PostWritePage.module.css';

function PostWrite({ onSubmit, onCancel }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    onSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <TextInput
        className={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목 입력"
      />
      <textarea
        className={styles.textarea}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용 입력"
      />
      <div className={styles.buttonGroup}>
        <Button type="submit">글 작성 완료</Button>
        <Button type="button" onClick={onCancel}>
          취소
        </Button>
      </div>
    </form>
  );
}

export default PostWrite;
