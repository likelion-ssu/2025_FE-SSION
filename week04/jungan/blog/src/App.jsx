import React from "react"
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  return (
    <>
      <MainTitleText>미니블로그</MainTitleText>
      <Outlet/>
    </>
  )
}

export default App;
