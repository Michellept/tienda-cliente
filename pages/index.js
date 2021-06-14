import {
  Form,
  Button,
  Navbar,
  Nav,
  FormControl,
  Container,
} from "react-bootstrap";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">pull&push</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Productos</Nav.Link>

          <Nav.Link href="/compra/micarrito">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-cart-fill text-white"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
              </a>
            
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
          <Button variant="outline-info">Buscar</Button>
        </Form>
      </Navbar>

      <Container>
        <Form>
          <h1 class="h3 mb-3 fw-normal">Por favor, registrese</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>correo electronico</Form.Label>
            <Form.Control type="email" placeholder="ejemplo@gmail.com" />
            <Form.Text className="text-muted">
              Nunca compartiremos tu correo electrónico con nadie más.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>contraseña</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="comprobar" />
          </Form.Group>
          <Button variant="primary" type="submit">
            acceder
          </Button>
        </Form>
      </Container>
    </>
  );
}
