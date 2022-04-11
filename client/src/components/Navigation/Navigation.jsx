import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap'
import "./Navigation.css"

function Navigation() {

    return (
        <>
            <Navbar className="back-ground-nav" variant="dark" expand="lg" style={{ marginBottom: 30 }}>
                <Container>
                    <NavLink to="/" className="navLink">
                        <Navbar.Brand as="span">Logo</Navbar.Brand>
                    </NavLink>
                    
                    <Nav className="m-auto">
                        <NavLink to="/my-history" className="navLink">
                            <Nav.Link as="span">Mi Historia</Nav.Link>
                        </NavLink>
                        <NavLink to="/channels" className="navLink">
                            <Nav.Link as="span">Medios</Nav.Link>
                        </NavLink>
                        <NavLink to="trip-routes" className="navLink">
                            <Nav.Link as="span">Ruta</Nav.Link>
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation
