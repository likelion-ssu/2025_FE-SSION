import { useState } from 'react';

function CommentWrite({ onAddComment }) {
  const [comment, setComment] = useState('');

  const handleSubmit = () => {
    if (!comment) return;
    onAddComment(comment);
    setComment('');
  };

  return (
    <div>
      <input
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="댓글 입력"
        style={{ width: '300px' }}
      />
      <button onClick={handleSubmit}>작성</button>
    </div>
  );
}

export default CommentWrite;
