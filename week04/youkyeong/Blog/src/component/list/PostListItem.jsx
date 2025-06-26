import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 1px solid #8fcefc;
  border-radius: 8px;
  cursor: pointer;
  background-color: white;
  :hover {
    background: #eef5ff;
  }
`;

const Titletext = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

function PostListItem(props) {
  const { post, onClick } = props;
  return (
    <Wrapper onClick={onClick}>
      <Titletext>{post.title}</Titletext>
    </Wrapper>
  );
}

export default PostListItem;
