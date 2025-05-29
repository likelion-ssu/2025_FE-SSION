import React from 'react'

export default function CommentListItem({comment}) {
  return (
    <div
      style={{
        border: '1px solid #888',
        padding: '0px 10px 0px 10px',
        marginTop: '8px',
        cursor: 'pointer',
        borderRadius: '8px',
      }}
    >
    <p>{comment.content}</p>
    </div>
  )
}
