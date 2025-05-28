function PostList({ posts, onSelect }) {
    return (
      <div>
        <h2>📚 글 목록</h2>
        {posts.map((post, idx) => (
          <div
            key={idx}
            onClick={() => onSelect(idx)}
            style={{ border: '1px solid #ccc', padding: '10px', margin: '5px 0', cursor: 'pointer' }}
          >
            {post.title}
          </div>
        ))}
      </div>
    );
  }
  
  export default PostList;
  