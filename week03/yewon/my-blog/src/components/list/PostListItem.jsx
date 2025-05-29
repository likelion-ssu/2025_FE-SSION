import styled from 'styled-components';

const Item = styled.div`
  border: 1px solid #ddd;
  padding: 12px 16px;
  margin-bottom: 10px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    background-color: #f7f7f7;
  }
`;

function PostListItem({ title, onClick }) {
  return <Item onClick={onClick}>{title}</Item>;
}

export default PostListItem;
