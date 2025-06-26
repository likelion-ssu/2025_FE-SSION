import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PostList from "../list/PostList";
import Button from "../ui/Button";
import data from "../../data.json";

const Wrapper = styled.div`
  padding: 16px;
  width: calc(100%-32px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Contatiner = styled.div`
  width: 100%;
  max-width: 720px;

  & > * {
    margin-bottom: 16px;
  }
`;

function MainPage(props) {
  const {} = props;
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Contatiner>
        <Button
          title="글 작성하기"
          onClick={() => {
            navigate("/post-write");
          }}
        />
        <PostList
          posts={data}
          onClickItem={(item) => {
            navigate(`/post/${item.id}`);
          }}
        />
      </Contatiner>
    </Wrapper>
  );
}

export default MainPage;
