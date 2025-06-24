import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 0px;
    border-radius: 8px;
    cursor: pointer;
    color: white;
    background-color: #5999ff;
`

function Button(props){
    const{title, onClick} =props;
    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;    
}

export default Button;