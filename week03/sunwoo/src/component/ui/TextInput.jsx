import React from "react";
import styled from "styled-components";

const StyledTextInput = styled.textarea`
  width: 100%;
  outline: none;
  padding: 10px;
  resize: none;
  border: 1px solid #79d12c;
  box-sizing: border-box;
  border-radius: 5px;
`;

const TextInput = ({ placeholder }) => {
  return (
    <div>
      <StyledTextInput placeholder={placeholder} />
    </div>
  );
};

export default TextInput;
