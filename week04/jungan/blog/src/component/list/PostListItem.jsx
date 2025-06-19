import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid #5999ff;
    border-radius: 8px;
    cursor: pointer;
    background-color: white;
    :hover{
        background-color: #eef5ff;
    }
`;

const TitleText = styled.p`
    font-size: 20px;
    font-weight: 500;
`;

function PostListItem(props){
    const { post, onClick } = props;
    return (
        <Wrapper onClick = {onClick}>
            <TitleText>{post.title}</TitleText>
        </Wrapper>
    )
}

export default PostListItem;