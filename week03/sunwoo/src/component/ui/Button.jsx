import React from "react";
import styled from "styled-components";

const StyledButton = styled.div`
  display: inline-block;
  padding: 5px 10px;
  background-color: #e5fad2;
  border: 1px solid #79d12c;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
`;

const Button = (props) => {
  const { title } = props;
  return (
    <div>
      <StyledButton>{title || "button"}</StyledButton>
    </div>
  );
};

export default Button;
