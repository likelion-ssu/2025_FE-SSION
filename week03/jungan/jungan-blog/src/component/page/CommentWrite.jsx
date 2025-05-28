import React from 'react'
import { useState } from 'react';

export default function CommentWrite({ onSave }) {
  const [name, setName] = useState('');
    const [content, setContent] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!name || !content) {
        alert('제목과 내용을 모두 입력해주세요.');
        return;
      }
      onSave({ name, content });
      setName('');
      setContent('');
    };
  
    return (
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '18px' }}>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: '8px', fontSize: '16px' }}
        />
        <textarea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={5}
          style={{ padding: '8px', fontSize: '16px' }}
        />
        <button type="submit" style={{ padding: '10px', fontSize: '16px' }}>
          댓글 저장
        </button>
      </form>
    );
}
