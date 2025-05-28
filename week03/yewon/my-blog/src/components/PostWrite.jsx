import { useState } from 'react';

function PostWrite({ onAddPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!title || !content) return;
    onAddPost({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2>✏️ 글 작성</h2>
      <input
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: '300px', marginBottom: '8px' }}
      /><br />
      <textarea
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ width: '300px', height: '80px' }}
      /><br />
      <button onClick={handleSubmit}>등록</button>
    </div>
  );
}

export default PostWrite;
