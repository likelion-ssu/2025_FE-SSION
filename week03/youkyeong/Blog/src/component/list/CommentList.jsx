import CommentListItem from "./CommentListItem";

export default function CommentList({ comments }) {
  return (
    <div>
      {comments.map((comment, index) => (
        <CommentListItem key={index} comment={comment} />
      ))}
    </div>
  );
}
