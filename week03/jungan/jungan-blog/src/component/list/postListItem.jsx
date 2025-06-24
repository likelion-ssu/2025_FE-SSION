const PostListItem = ({ post, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        border: '1px solid #ddd',
        padding: '12px',
        marginBottom: '8px',
        cursor: 'pointer',
        borderRadius: '8px',
        width: '800px'
      }}
    >
      <h3>{post.title}</h3>
    </div>
  );
};

export default PostListItem;
