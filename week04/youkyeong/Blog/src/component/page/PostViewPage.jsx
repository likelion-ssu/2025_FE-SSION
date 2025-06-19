import React, { useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import CommentList from "../list/CommentList";
import { useNavigate, useParams } from "react-router-dom";
import data from "../../data.json";

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100%-32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  :not(:last-child) {
    margin-bottom: 16px;
  }
`;

const PostContainer = styled.div`
  padding: 8px 16px;
  border: 1px solid grey;
  border-radius: 8px;
`;

const TitleText = styled.p`
  font-size: 23px;
  font-weight: 500;
`;

const ContextText = styled.p`
  font-size: 16px;
  line-height: 32px;
  white-space: pre-wrap;
`;

const CommentLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

function PostViewPage(props) {
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const { postId } = useParams();

  const post = data.find((item) => item.id == postId);

  if (!post) {
    return <div>포스트를 찾을 수 없습니다.</div>;
  }

  return (
    <Wrapper>
      <Container>
        <Button
          title="뒤로가기"
          onClick={() => {
            navigate("/");
          }}
        />

        <PostContainer>
          <TitleText>{post.title}</TitleText>
          <ContextText>{post.content}</ContextText>
        </PostContainer>

        <CommentLabel>💬댓글</CommentLabel>
        <CommentList comments={post.comments} />

        <TextInput
          height={40}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          title="댓글 작성하기"
          onClick={() => {
            setComment("");
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default PostViewPage;
