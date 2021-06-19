import {
  Form,
  Button,
  Navbar,
  Nav,
  FormControl,
  Container,
  Card
} from "react-bootstrap";
import Styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container  style={{ paddingLeft: 250}}>

    
    <div className={Styles.card}>
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
    </div>
    </Container>
  );
}
