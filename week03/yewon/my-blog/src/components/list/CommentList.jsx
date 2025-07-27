import styled from 'styled-components';
import CommentListItem from './CommentListItem';

const CommentSection = styled.div`
  margin-top: 16px;
`;

const CommentTitle = styled.h3`
  margin-bottom: 8px;
  font-size: 18px;
  color: #333;
`;

function CommentList({ comments }) {
  return (
    <CommentSection>
      <CommentTitle>💬 댓글</CommentTitle>
      {comments.map((c, i) => (
        <CommentListItem key={i} content={c} />
      ))}
    </CommentSection>
  );
}

export default CommentList;
