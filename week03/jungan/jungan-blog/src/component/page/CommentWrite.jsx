import React from 'react'
import { useState } from 'react';
import Button from '../ui/Button';
import TextArea from '../ui/TextArea';

export default function CommentWrite({ onSave }) {
    const [content, setContent] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!content) {
        alert('내용을 입력해주세요.');
        return;
      }
      onSave({ content });
      setContent('');
    };
  
    return (
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '18px' }}>
        <TextArea
          placeholder="댓글을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={5}
          style={{ padding: '8px', fontSize: '16px' }}
        />
        <Button type="submit" style={{ padding: '10px', fontSize: '16px', width: "200px" }}>
          댓글 저장
        </Button>
      </form>
    );
}
