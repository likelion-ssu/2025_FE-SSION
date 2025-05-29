import React from 'react'
import CommentListItem from './CommentListItem'

export default function CommentList({comments}) {
  return (
    <div>
      {comments.map((comment) => (
        <CommentListItem
          key={comment.id}
          comment={comment}
        />
      ))}
    </div>
  )
}
