import PostListItem from "./PostListItem";
// PostListItem의 상위 컴포넌트

export default function PostList({ posts, onClickItem }) {
  return (
    <div>
      {posts.map((post) => (
        <PostListItem
          key={post.id}
          post={post}
          onClick={() => onClickItem(post)}
        />
      ))}
    </div>
  );
}
