import styled from 'styled-components';

const CommentItem = styled.p`
  background-color: #f1f1f1;
  padding: 10px 12px;
  border-radius: 6px;
  margin-bottom: 8px;
  font-size: 15px;
`;

function CommentListItem({ content }) {
  return <CommentItem>• {content}</CommentItem>;
}

export default CommentListItem;
