import styled from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #228be6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    background-color: #1971c2;
  }
`;

export default function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
