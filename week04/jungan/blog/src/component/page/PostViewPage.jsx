import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../ui/Button";
import TextInput from "../ui/TextInput";
import CommentList from "../list/CommentList";
import data from "../../data/data.json";

function PostViewPage() {
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
        <Button title="뒤로가기" onClick={() => navigate("/")} />

        <PostContainer>
          <TitleText>{post.title}</TitleText>
          <ContentText>{post.content}</ContentText>
        </PostContainer>

        <CommentLabel>댓글</CommentLabel>
        <CommentList comments={post.comments} />

        <TextInput
          height={40}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder={"댓글을 입력하세요"}
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
