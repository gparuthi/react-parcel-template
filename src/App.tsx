import styled from "styled-components";

export function App() {
  return (
    <Container>
      <Centered>test</Centered>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 10px;
  color: white;
  height: 100vh;
`;
const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;
