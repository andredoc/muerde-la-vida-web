import './ChannelsPage.css'
import ChannelCard from "../../components/ChannelCard/ChannelCard"
import ReactPlayer from "react-player"
import only_bike from "../../assets/images/only_bike.jpeg"
import testing_bike from "../../assets/images/testing_bike.jpeg"
import pablo_profile from "../../assets/images/pablo_profile.jpeg"

import { Container, Row, Col} from "react-bootstrap"

const ChannelsPage = () => {
    return (
        <>
            <Container >
                <Row >
                    <Col xs={12}>
                        <div className="video">
                            <ReactPlayer
                                className="react-player"
                                controls
                                url="https://www.youtube.com/watch?v=if_A7J_6svU"
                            />
                        </div>
                    </Col>        
                </Row> 
                <Row >
                    <Col xs={12} md={4} className="card-position">
                        <ChannelCard
                            name="Canal de Youtube"
                            text="Se grabará en un canal de Youtube, con una calidad de 4K, 
                                tanto videos normales como con dron."
                            image={only_bike}
                            url="https://www.youtube.com/channel/UCRz1dnRh7iMQRBdPI6_-H4Q"
                        />   
                    </Col>
                    <Col xs={12} md={4} className="card-position" >
                        <ChannelCard
                            name="Atlas Obscura"
                            text="Se recorrerán puntos interesantes de Atlas Obscura, 
                                 una guía de sitios distintos, desde lugares abandonados a sitios 
                                 curiosos."
                            image={testing_bike}
                            url="https://www.atlasobscura.com/"
                        />
                    </Col>
                    <Col xs={12} md={4} className="card-position">
                        <ChannelCard
                            name="Honda Mapit"
                            text="Puedes ver la posición en tiempo real (menos en Montenegro 
                                 y Albania porque no tendremos Internet).
                                 Email: pablorocar@gmail.com, 
                                 Contraseña: muerdelavida2022."
                            image={pablo_profile}
                            url="https://honda.mapit.me/login"
                        />
                    </Col>
                </Row>
            </Container>     
        </>
    )
}
export default ChannelsPage