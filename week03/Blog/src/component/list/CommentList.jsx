import React from 'react';
import CommentListItem from './CommentListItem';

function CommentList({ comments }) {
  return (
    <div>
      {comments.map((comment) => (
        <CommentListItem key={comment.id} text={comment.text} />
      ))}
    </div>
  );
}

export default CommentList;
