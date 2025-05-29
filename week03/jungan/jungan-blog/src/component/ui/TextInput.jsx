// components/ui/TextInput.jsx
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #0077ff;
    box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.2);
  }
`;

const TextInput = (props) => {
  return <StyledInput {...props} />;
};

export default TextInput;
