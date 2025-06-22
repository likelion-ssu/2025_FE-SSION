import React from "react";
import styled from "styled-components";

const CommentItem = styled.div`
  padding: 25px 15px;
  border: 1px solid #52b000;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  margin: 10px 0px;
`;

const CommentListItem = (props) => {
  const { comment } = props;
  return (
    <div>
      <CommentItem>{comment}</CommentItem>
    </div>
  );
};

export default CommentListItem;
