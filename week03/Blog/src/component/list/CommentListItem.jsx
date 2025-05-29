import React from 'react';

function CommentListItem({ text }) {
  return (
    <div
      style={{
        padding: '16px',
        marginBottom: '8px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
      }}
    >
      {text}
    </div>
  );
}

export default CommentListItem;
