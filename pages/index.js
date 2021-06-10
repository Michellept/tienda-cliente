import {
  Form,
  Button,
  Navbar,
  Nav,
  FormControl,
  Container,
} from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">pull&push</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Productos</Nav.Link>
          <Nav.Link href="#pricing">Carrito</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Buscar</Button>
        </Form>
      </Navbar>

      <Container>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>correo electronico</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            Nunca compartiremos tu correo electrónico con nadie más.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            acceder
          </Button>
        </Form>
      </Container>
    </>
  );
}
