import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const PostItem = styled.div`
  padding: 25px 15px;
  border: 1px solid #79d12c;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  margin: 10px 0px;
`;

const PostListItem = (props) => {
  const { post } = props;

  const navigate = useNavigate();

  const moveContentViewPage = () => {
    navigate(`/postViewPage/${post.id}`);
  };

  return (
    <>
      <PostItem onClick={moveContentViewPage}>{post.title}</PostItem>
    </>
  );
};

export default PostListItem;
