import { Card, Button, Row, Col, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./ChannelCard.css"

const ChannelCard = ({name, text, image, url}) => {
    return (            
        <Card className="cardChannel" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title >{name}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Button className="cardButton" onClick={() => window.open(url, "_blank")} variant="outline-primary">Ir al Sitio </Button>
            </Card.Body>
        </Card>
    )
}

export default ChannelCard