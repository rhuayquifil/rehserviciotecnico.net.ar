import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import './Header.css';


export const Header = () => {

  return (
    <div className="header">
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">R.E.H Servicio Tecnico</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Saavedra e Italia, Viedma
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action1">Seguimiento de Reparacion</Nav.Link>
                  <Nav.Link href="#action1">Contacto Via Whatsapp</Nav.Link>
                  <Nav.Link href="#action2">Cotizador Online</Nav.Link>

                  <NavDropdown
                    title="Servicios"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">
                      Cambio de Pantallas
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Cambio de baterias
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Mantenimiento de Computadoras
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Desbloqueo de Celular
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Instalacion de Software
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link href="#ubicacion">Ubicacion</Nav.Link>
                  <Nav.Link href="#action1">Reseñas y Comentarios</Nav.Link>
                  <Nav.Link href="#instagram">reh_serviciotecnico</Nav.Link>
                  <Nav.Link href="#facebook">reh_serviciotecnico</Nav.Link>
                  <Nav.Link href="#action1">Blog</Nav.Link>
                  <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );

  /*return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#">R.E.H Servicio Tecnico</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Saavedra e Italia, Viedma
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action1">Seguimiento de Reparacion</Nav.Link>
                  <Nav.Link href="#action1">Contacto Via Whatsapp</Nav.Link>
                  <Nav.Link href="#action2">Cotizador Online</Nav.Link>

                  <NavDropdown
                    title="Servicios"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">
                      Cambio de Pantallas
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Cambio de baterias
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Mantenimiento de Computadoras
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Desbloqueo de Celular
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Instalacion de Software
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link href="#ubicacion">Ubicacion</Nav.Link>
                  <Nav.Link href="#action1">Reseñas y Comentarios</Nav.Link>
                  <Nav.Link href="#instagram">reh_serviciotecnico</Nav.Link>
                  <Nav.Link href="#facebook">reh_serviciotecnico</Nav.Link>
                  <Nav.Link href="#action1">Blog</Nav.Link>
                  <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );*/
}
