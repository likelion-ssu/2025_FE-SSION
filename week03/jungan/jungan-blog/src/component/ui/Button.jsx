// components/ui/Button.jsx
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => props.bg || '#0077ff'};
  color: white;
  margin-bottom: 16px;
  border: none;
  border-radius: 6px;
  padding: 10px 16px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.hover || '#005ccc'};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
