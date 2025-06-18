import React from "react";
import styled from "styled-components";

const CommentItem = styled.div`
  padding: 25px 15px;
  border: 1px solid #212121;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  margin: 10px 0px;
`;

const CommentListItem = () => {
  return (
    <div>
      <CommentItem>댓글1</CommentItem>
      <CommentItem>댓글2</CommentItem>
    </div>
  );
};

export default CommentListItem;
