import { Container } from "@mds/mds-reactjs-library";
import Header from "../src/header/Header";
import { Routing } from "./utils/routes";
import "./assets/scss/index.scss";
import { ModalFactory } from "@mds/mds-reactjs-library";
function App() {
  return (
    <>
      <Header />
      <Container maxWidth="xxl" style={{ minHeight: "75vh" }}>
        <Routing />
        <ModalFactory />
      </Container>
    </>
  );
}

export default App;
