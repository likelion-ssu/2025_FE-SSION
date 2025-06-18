import React from "react";
import { useParams } from "react-router-dom";

const PostViewPage = () => {
  const params = useParams();
  return <div>{params.id}번째 포스트 뷰 페이지입니다.</div>;
};

export default PostViewPage;
