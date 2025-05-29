import React from "react";
import styled from "styled-components";

const StyledTextInput = styled.textarea`
  width: 100%;
  ${(props) => props.height && `height: ${props.height}px`}
  outline: none;
  padding: 10px;
  resize: none;
  border: 1px solid #79d12c;
  box-sizing: border-box;
  border-radius: 5px;
  &::placeholder {
    color: #d8d8d8;
  }
`;

const TextInput = (props) => {
  const { height, value, onChange, placeholder } = props;
  return (
    <div>
      <StyledTextInput
        height={height}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
