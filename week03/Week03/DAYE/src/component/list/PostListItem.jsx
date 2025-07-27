import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 1520px;
  border: 3px cornflowerblue solid;
  border-radius: 8px;
  padding: 20px 30px;
  cursor: pointer;
`;

const TitleText = styled.h2`
  font-size: 20px;
  font-weight: 500;
`;

function PostListItem(props) {
  const { post, onClick } = props;
  return (
    <Wrapper onClick={onClick}>
      <TitleText>{post.title}</TitleText>
    </Wrapper>
  );
}

export default PostListItem;
