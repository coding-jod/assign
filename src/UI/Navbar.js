import { Container, Nav, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import logo from "../Assets/Screenshot 2024-02-24 110404.png";

function ColorSchemesExample() {
  return (
    <Navbar style={{ display: "flex" }}>
      <Container style={{ justifyContent: "flex-start" }}>
        <Navbar.Brand href="#home">
          <img src={logo} alt="koinx_logo" />
        </Navbar.Brand>
      </Container>
      <Container style={{ justifyContent: "flex-end" }}>
        <Nav>
          <Button variant="light" className="mr-4 bg-white">
            Crypto Taxes
          </Button>
          <Button variant="light" className="mr-4 bg-white">
            Free Tools
          </Button>
          <Button variant="light" className="mr-4 bg-white">
            Resource Center
          </Button>
          <Button
            className="mt-0 mr-4 py-2 px-4 fs-5"
            variant="primary"
            size="sm"
            active
            style={{ fontWeight: "bold" }}
          >
            Get Started
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;
