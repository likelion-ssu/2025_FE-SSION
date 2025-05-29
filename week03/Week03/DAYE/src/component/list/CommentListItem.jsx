import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px;
  border-radius: 8px;
  background-color: #d9e1fa;
`;

const ContentText = styled.p`
  font-size: 16px;
`;

function CommentListItem(props) {
  const { comment } = props;
  return (
    <Wrapper>
      <ContentText>{comment.content}</ContentText>
    </Wrapper>
  );
}

export default CommentListItem;
