import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Post from './component/page/Post';
import PostWrite from './component/page/PostWrite';
import CommentWrite from './component/page/CommentWrite';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Post />} />
        <Route path="/postwrite" element={<PostWrite />} />
        <Route path="/post/:postId" element={<CommentWrite />} />
      </Routes>
    </div>
  );
}

export default App;
