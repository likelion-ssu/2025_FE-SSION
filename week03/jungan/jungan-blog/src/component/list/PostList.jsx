import PostListItem from './postListItem';

const PostList = ({ posts, onSelectPost }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostListItem
          key={post.id}
          post={post}
          onClick={() => onSelectPost(post.id)}
        />
      ))}
    </div>
  );
};

export default PostList;
