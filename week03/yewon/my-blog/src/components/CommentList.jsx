import styled from 'styled-components';

const CommentSection = styled.div`
  margin-top: 16px;
`;

const CommentTitle = styled.h3`
  margin-bottom: 8px;
  font-size: 18px;
  color: #333;
`;

const CommentItem = styled.p`
  background-color: #f1f1f1;
  padding: 10px 12px;
  border-radius: 6px;
  margin-bottom: 8px;
  font-size: 15px;
`;

function CommentList({ comments }) {
  return (
    <CommentSection>
      <CommentTitle>💬 댓글</CommentTitle>
      {comments.map((c, i) => (
        <CommentItem key={i}>• {c}</CommentItem>
      ))}
    </CommentSection>
  );
}

export default CommentList;
