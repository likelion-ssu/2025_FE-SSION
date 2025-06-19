import React from "react";
import TextInput from "../ui/TextInput";

const PostWritePage = () => {
  return (
    <div>
      <TextInput placeholder={"제목을 입력하세요"} />
      <TextInput height={500} placeholder={"내용을 입력하세요"} />
    </div>
  );
};

export default PostWritePage;
