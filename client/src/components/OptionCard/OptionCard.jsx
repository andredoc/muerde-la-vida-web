import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./OptionCard.css"

const OptionCard = ({name, text, image}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {text}
                </Card.Text>
                <Link to="https://www.youtube.com/channel/UCRz1dnRh7iMQRBdPI6_-H4Q" />
            </Card.Body>
        </Card>
    )
}

export default OptionCard