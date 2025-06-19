import React from "react";
import PostListItem from "./PostListItem";

const PostList = (props) => {
  const { posts } = props;

  return (
    <div>
      {posts.map((post) => {
        return <PostListItem key={post.id} postID={post.id} post={post} />;
      })}
    </div>
  );
};

export default PostList;
