import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle";

const StyledButton = styled.button`
  width: 300px;
  padding: 10px;
  font-size: 23px;
  padding: 8px 16px;
  margin: 14px;
  border-radius: 10px;
  color: black;
  background-color: ${(props) => props.backgroundColor || "white"};
  font-weight: 500;
  border: 1px solid #b9b9b9;
  cursor: pointer;
`;

function Button(props) {
  const { title, onClick, backgroundColor } = props;
  return (
    <StyledButton onClick={onClick} backgroundColor={backgroundColor}>
      {title || "button"}
    </StyledButton>
  );
}

export default Button;
