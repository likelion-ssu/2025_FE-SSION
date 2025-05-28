// src/components/page/Post.jsx
import { useState } from "react";
import CommentList from "../list/CommentList";
import CommentWrite from "./commentWrite";

const Post = ({ post }) => {
    const [comments, setComments] = useState([{id: 1, name: "이정안", content : "어쩌고 저쩌고"}]);

  const handleAddComment = (newPost) => {
    setComments([...comments, { ...newPost, id: Date.now() }]);
  };

  return (
    <>
    <div style={{ border: '1px solid #84c4fc', padding: '16px', marginTop: '20px' }}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
    <CommentList comments = {comments}/>
    <CommentWrite onSave={handleAddComment}/>
    </>

  );
};

export default Post;
