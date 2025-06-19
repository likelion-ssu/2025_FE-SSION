import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
    width: calc()(100% - 32px);
    ${(props)=>props.height && `height: ${props.height}px;`}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
    border: 1px solid #599;
    border-radius: 8px;
    &::placeholder{
        color:#d8d8d8
    }
`;

function TextInput(props){
    const { height, value, onChange, placeholder } = props;
    return <StyledTextArea height={height} value={value} onChange={onChange} placeholder={placeholder}/>
}

export default TextInput;