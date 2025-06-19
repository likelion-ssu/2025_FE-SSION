import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border-width: 1px;
  border-radius: 8px;
  color: white;
  font-weight: 500;
  background-color: #8cc6ff;
  border: 1px solid white;
  cursor: pointer;
`;

export default function Button(props) {
  const { title, onClick } = props;
  return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}
