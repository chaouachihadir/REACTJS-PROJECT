import React from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { Button } from "react-bootstrap";
function App() {
  return (
    <>
      {/* Début du fragment React */}
      <div className="App">
        {/* Barre de navigation Bootstrap */}
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#">Planétes</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="">About</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container>
          <h1 className="animated-title">Welcome ! </h1>

          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="" className="mx-auto d-block" />
                <div className="img-container">
                  <img src="Mars.jpg" alt="img" />
                </div>

                <Card.Body>
                  <Card.Title>Mars</Card.Title>
                  <Card.Text>
                    Mars est la quatrième planète du Système solaire par ordre
                    croissant de la distance au Soleil et la deuxième par ordre
                    croissant de la taille et de la masse.
                  </Card.Text>
                  <Button variant="primary">Explore mars</Button>{" "}
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="" className="mx-auto d-block" />
                <div className="img-container">
                  <img src="lune.jpg" alt="img" />
                </div>

                <Card.Body>
                  <Card.Title>Lune</Card.Title>
                  <Card.Text>
                    La Lune, ou Terre I, est l'unique satellite naturel
                    permanent de la planète Terre. Il s'agit du cinquième plus
                    grand satellite naturel du Système solaire.
                  </Card.Text>
                  <Button variant="primary">Explore Lune</Button>{" "}
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="" className="mx-auto d-block" />
                <div className="img-container">
                  <img src="uranus.jpg" alt="img" />
                </div>
                <Card.Body>
                  <Card.Title>Uranus</Card.Title>
                  <Card.Text>
                    Uranus est la 7e planète en partant du Soleil, et la 3e plus
                    grande du Système solaire
                  </Card.Text>
                  <Button variant="primary">Explore uranus</Button>{" "}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
