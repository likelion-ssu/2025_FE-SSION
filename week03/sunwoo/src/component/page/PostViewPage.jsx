import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../../../data.json";
import CommentListItem from "../list/CommentListItem";
import TextInput from "../ui/TextInput";

const CommentItem = styled.div`
  padding: 25px 15px;
  border: 1px solid #52b000;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  margin: 10px 0px;
`;

const ContentItem = styled(CommentItem)`
  padding: 0px 20px 20px 20px;
  border: 1px solid #79d12c;
`;

const PostViewPage = () => {
  const posts = data;

  const params = useParams();

  return (
    <div>
      {params.id}번째 포스트 뷰 페이지입니다.
      <ContentItem>
        <h3>{posts[params.id - 1].title}</h3>
        {posts[params.id - 1].content}
      </ContentItem>
      <div style={{ marginBottom: "8px" }}>댓글</div>
      {posts[params.id - 1].comments.map((comment) => {
        return (
          <CommentListItem
            key={comment.id}
            comment={comment.content}
          ></CommentListItem>
        );
      })}
      <TextInput height={40} placeholder={"댓글을 입력해 주세요"} />
    </div>
  );
};

export default PostViewPage;
