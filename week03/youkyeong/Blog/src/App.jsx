import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";
import initialData from "./data.json";

export default function App() {
  const [posts, setPosts] = useState(initialData);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage posts={posts} />} />
        <Route
          path="/post-write"
          element={<PostWritePage setPosts={setPosts} />}
        />
        <Route
          path="/post/:id"
          element={<PostViewPage posts={posts} setPosts={setPosts} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
