import OptionCard from "../../components/OptionCard/OptionCard"
import ReactPlayer from "react-player"
import only_bike from "../../assets/images/only_bike.jpeg"
import testing_bike from "../../assets/images/testing_bike.jpeg"
import pablo_profile from "../../assets/images/pablo_profile.jpeg"

import { Link } from "react-router-dom"

const ChannelsPage = () => {
    return (
        <>
            <h1>Esta es ChannelsPage</h1>
            <div className="video">
                <ReactPlayer 
                    className="react-player"        
                    controls
                    url="https://www.youtube.com/watch?v=if_A7J_6svU" 
                />
            </div>
            <OptionCard
                name="Canal de Youtube" 
                text="Se grabará en un canal de Youtube, con una calidad de 4K, 
                tanto videos normales como con dron."
                image={only_bike}
            >
                
                <Link to="https://www.youtube.com/channel/UCRz1dnRh7iMQRBdPI6_-H4Q" />    
            </OptionCard>
            <OptionCard 
                name="Atlas Obscura"
                text="Se recorrerán puntos interesantes de Atlas Obscura, 
                una guía de sitios distintos, desde lugares abandonados a sitios 
                curiosos." 
                image={testing_bike} 
            />
            <OptionCard 
                name="Honda Mapit"
                text="Se puede ver la posición en tiempo real (menos en Montenegro 
                y Albania que no tendremos Internet), aquí: https://honda.mapit.me, 
                email: pablorocar@gmail.com, contraseña: muerdelavida2022."
                image={pablo_profile}
            />
        </>
    )
}
export default ChannelsPage