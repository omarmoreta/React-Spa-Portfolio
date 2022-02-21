import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <div>
      <Container variant="dark">
        <Row md={3}>
          <Col>1</Col>
          <Col>2</Col>
          <Col>3</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
