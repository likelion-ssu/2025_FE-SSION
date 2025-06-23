import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #b9b9b9;
  border-radius: 8px;
  &::placeholder {
    color: #b8b8b8df;
    font-size: 17px;
  }
`;

function InfoInput(props) {
  const { type = "text", value, onChange, placeholder } = props;
  return (
    <StyledTextarea
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    ></StyledTextarea>
  );
}

export default InfoInput;
