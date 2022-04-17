import { Accordion, ListGroup } from "react-bootstrap"

const RouteAccordion = () => {
    return (
        <>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Detalle de la Ruta</Accordion.Header>
                    <Accordion.Body>
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
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>  
    )
}

export default RouteAccordion