import "./App.css";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
`;

function App() {
  return (
    <MainContainer>
      <Container>
        <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
          황선우의 미니 블로그
        </h2>
        <Outlet />
      </Container>
    </MainContainer>
  );
}

export default App;
