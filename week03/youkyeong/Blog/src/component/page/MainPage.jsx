import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #f8f9fa;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background: white;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 24px;
  font-size: 24px;
`;

export default function MainPage({ posts }) {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Card>
        <Title>미니 블로그</Title>
        <Button onClick={() => navigate("/post-write")}>글 작성하기</Button>
        <PostList
          posts={posts}
          onClickItem={(post) => navigate(`/post/${post.id}`)}
        />
      </Card>
    </Wrapper>
  );
}
