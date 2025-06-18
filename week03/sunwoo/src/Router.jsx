import React from "react";
import PostViewPage from "./component/page/PostViewPage";
import PostWritePage from "./component/page/PostWritePage";
import MainPage from "./component/page/MainPage";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "/postViewPage", element: <PostViewPage /> },
      { path: "/postWritePage", element: <PostWritePage /> },
    ],
  },
]);

export default router;
