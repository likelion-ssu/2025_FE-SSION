import { useParams } from "react-router-dom";
import CommentList from "../list/CommentList";
import CommentWrite from "./CommentWrite";
import styled from "styled-components";

const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 32px;
`;

export default function PostViewPage({ posts, setPosts }) {
  const { id } = useParams();
  const postId = Number(id);
  const post = posts.find((p) => p.id === postId);

  if (!post) return <div>글을 찾을 수 없습니다.</div>;

  const handleAddComment = (comment) => {
    const updatedPosts = posts.map((p) =>
      p.id === postId ? { ...p, comments: [...p.comments, comment] } : p
    );
    setPosts(updatedPosts);
  };

  return (
    <Container>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <CommentList comments={post.comments} />
      <CommentWrite onSubmit={handleAddComment} />
    </Container>
  );
}
