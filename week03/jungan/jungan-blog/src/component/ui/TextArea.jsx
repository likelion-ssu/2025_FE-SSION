// components/ui/TextArea.jsx
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  width: ${(props) => props.width || '500px'}; 
  height: ${(props) => props.height || '100px'}; 
  resize: vertical; /* 사용자가 크기 조절 가능 */
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: #0077ff;
    box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.2);
  }
`;

const TextArea = (props) => {
  return <StyledTextarea {...props} />;
};

export default TextArea;
