//import { Container } from "./AppStyles";
import GlobalStyle from "./styles/globalStyles";
import SearchCity from "./components/SearchCity";
import TopCities from "./components/TopCities";
import { ToastContainer } from "react-toastify";
import { Row, Col, Container } from "react-bootstrap";

function App() {
  return (
    <>
    <Container>
      <ToastContainer/>
      <GlobalStyle />
      <Row>
        <Col> <SearchCity/> </Col>
        <Col> <TopCities/> </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
