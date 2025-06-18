import "./App.css";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  margin: 80px 150px;
`;

function App() {
  return (
    <MainContainer>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        황선우의 미니 블로그
      </h2>
      <Outlet />
    </MainContainer>
  );
}

export default App;
