import CommentList from './CommentList';
import CommentWrite from './CommentWrite';

function Post({ post, onBack, onAddComment }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <button onClick={onBack}>← 목록으로</button>
      <hr />
      <CommentList comments={post.comments} />
      <CommentWrite onAddComment={onAddComment} />
    </div>
  );
}

export default Post;
