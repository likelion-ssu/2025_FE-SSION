import React from "react";
import styled from "styled-components";

const StyledTextInput = styled.textarea`
  width: 100%;
  margin: 10px 0px;
  outline: none;
  padding: 10px;
  border: 1px solid #79d12c;
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
