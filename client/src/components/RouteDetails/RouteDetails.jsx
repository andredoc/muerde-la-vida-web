import { useState } from "react";
import { Button, Offcanvas, ListGroup } from "react-bootstrap"

const RouteDetails = () => {
    
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

    return (
                <>
                    <Button variant="primary" onClick={handleShow}>
                        Detalle de la Ruta
                    </Button>
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Detalle de la Ruta</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ListGroup as="ul">
                                <ListGroup.Item as="li" >
                                    Unos 9,000 Kms y 26 días, en Mayo 2022, sin paradas prefijadas.
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    Desde Madrid, pasando por Barcelona, Francia, Italia, Eslovenia,
                                    Croacia Montenegro, Albania, Grecia, Turquía.
                                </ListGroup.Item>
                                <ListGroup.Item as="li" >
                                    La vuelta por Bulgaria, Rumanía, Austria, Suiza, Francia y España.
                                </ListGroup.Item>
                            </ListGroup>
                        </Offcanvas.Body>
                    </Offcanvas>
                </>
            )
}

export default RouteDetails