import { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import bike_trip from '../../assets/images/bike_trip.jpeg'
import only_bike from '../../assets/images/only_bike.jpeg'
import pablo_bike from '../../assets/images/pablo_bike.jpeg'
import pablo_profile from '../../assets/images/pablo_profile.jpeg'
import testing_bike from '../../assets/images/testing_bike.jpeg'

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={pablo_bike}
                    alt="Pablo's bike"
                />
                <Carousel.Caption >
                    <h3>Siempre he pensado que no debemos ser espectadores de nuestras
                        vida, sino actores. La vida hay que sentirla, vivirla, morderla ...
                    </h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={only_bike}
                    alt="Only bike"
                />

                <Carousel.Caption >
                    <h3>Mucha gente tiene ideas, pero sólo unos pocos deciden llevarlas a cabo 
                        hoy y no mañana. No la semana que viene, sino hoy.
                    </h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={bike_trip}
                    alt="Bike trip"
                />

                <Carousel.Caption>
                    <h3>"...llevo años con la idea de hacer un viaje en moto
                        desde España a Estambúl, y por un motivo u otro, lo 
                        estaba demorando..."
                    </h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;