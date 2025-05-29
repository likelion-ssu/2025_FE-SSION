import styled from "styled-components";

const Item = styled.div`
  padding: 12px 16px;
  width: 400px;
  background: white;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 12px;
  font-size: 16px;

  &:hover {
    background: #f1f3f5;
  }
`;

export default function PostListItem({ post, onClick }) {
  return <Item onClick={onClick}>{post.title}</Item>;
}
