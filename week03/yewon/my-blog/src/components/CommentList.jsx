function CommentList({ comments }) {
    return (
      <div>
        <h3>💬 댓글</h3>
        {comments.map((c, i) => (
          <p key={i}>• {c}</p>
        ))}
      </div>
    );
  }
  
  export default CommentList;
  