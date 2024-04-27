import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffcanvasExample() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggleOffcanvas = () => setShowOffcanvas(!showOffcanvas);
  const handleCloseOffcanvas = () => setShowOffcanvas(false);
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary nav-responsive"
        >
          <Container fluid>
            {/* <img src="./favicon.ico" width="80" height="80" alt="logo"></img> */}
            <div className='button-nav'>
              <button className="button" onClick={handleToggleOffcanvas}>
                <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM128,72a12,12,0,1,0-12-12A12,12,0,0,0,128,72Zm0,112a12,12,0,1,0,12,12A12,12,0,0,0,128,184Z"></path></svg>
              </button>
            </div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="top"
              show={showOffcanvas}
              onHide={handleCloseOffcanvas}
              // className="bg-transparent"
              style={{
                border: 'none',
                background: 'linear-gradient(rgba(0,0,0,0.5), transparent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Offcanvas.Body>
                {/* <Offcanvas.Header closeButton className='close-button'/> */}
                <Nav className="justify-content-end align-items-center flex-grow-1">
                  <Nav.Link href="#SOBREMI" onClick={() => handleCloseOffcanvas()}>SACAR TURNO</Nav.Link>
                  <Nav.Link href="/consulta" onClick={() => handleCloseOffcanvas()}>CONSULTA</Nav.Link>
                  <Nav.Link href="/#SERVICIOS" onClick={() => handleCloseOffcanvas()}>SERVICIOS</Nav.Link>
                  <Nav.Link href="#CLIENTES" onClick={() => handleCloseOffcanvas()}>CLIENTES</Nav.Link>
                  <Nav.Link href="#UBICACION" onClick={() => handleCloseOffcanvas()}>UBICACIÓN</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;
