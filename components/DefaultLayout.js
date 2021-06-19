import {
  Form,
  Button,
  Navbar,
  Nav,
  FormControl,
  NavDropdown,
  Col,
  Container,
} from "react-bootstrap";

function DefaultLayout(props) {
  return (
    <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/productos/index">
          {" "}
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-grid-fill text-white"
              viewBox="0 0 16 16"
            >
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
            </svg>
          </a>
          pull&push
        </Navbar.Brand>
        <a></a>

        <Nav className="mr-auto"></Nav>

        <Form inline >
          <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
          <Button variant="outline-info">Buscar</Button>

        </Form>
      </Navbar>
      <Navbar bg="light">
        <NavDropdown title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item href="/productos/mujer">Mujer</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/productos/hombre">Hombre</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/compra/mispedidos">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-bucket-fill "
              viewBox="0 0 16 16"
            >
              <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5zm1.005 0a4.5 4.5 0 0 1 8.945 0H3.527z" />
            </svg>
          </a>
          Pedidos
        </Nav.Link>
        <Nav.Link></Nav.Link>
        <Nav.Link href="/compra/micarrito">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-cart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </a>
          Carrito
        </Nav.Link>

        <Nav.Link href="/compra/misfavoritos">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              class="bi bi-heart-fill "
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          </a>
          Favoritos
        </Nav.Link>

        <Form style={{ paddingLeft: 750 }} className="d-flex">
          <Button type="button" className="btn btn-light text-dark me-2">
            Acceder
          </Button>
          <Button type="button" className="btn btn-warning">
            Registrarse
          </Button>
        </Form>
      </Navbar>

      {props.children}
    </Col>
  );
}

export default DefaultLayout;
