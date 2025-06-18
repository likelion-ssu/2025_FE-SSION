import React from "react";
import styled from "styled-components";

const PostItem = styled.div`
  padding: 25px 15px;
  border: 1px solid #79d12c;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  margin: 10px 0px;
`;

const PostListItem = (props) => {
  const { onClick } = props;
  return (
    <>
      <PostItem onClick={onClick}>게시물1</PostItem>
    </>
  );
};

export default PostListItem;
