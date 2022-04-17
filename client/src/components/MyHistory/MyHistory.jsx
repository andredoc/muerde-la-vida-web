import { Accordion, ListGroup } from "react-bootstrap"

const MyHistory = ()=>{
    
    return (
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Sobre Mí</Accordion.Header>
                        <Accordion.Body>
                            <ListGroup as="ul">
                                <ListGroup.Item as="li">
                                    Me llamo <strong>Pablo Roca</strong>. He nacido en Palma de Mallorca, aunque toda mi
                                    familia es gallega y he vivido casi siempre en Coruña, Galicia. Soy
                                    gallego de convicción y de corazón.
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    Tengo 62 años y me considero una persona alegre, curiosa y activa.
                                    Cuando a mis 50 años quise volver a tocar la guitarra, recuerdo que
                                    alguien me dijo <i>"estás viejo para eso"</i>, mi respuesta fue <i>"si BB King
                                    sigue tocando la guitarra con 82 años, a mi me quedan muchos años de
                                    diversión".</i>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    Siempre he pensado que no debemos ser espectadores de nuestras vida,
                                    sino actores. <i>"La vida hay que sentirla, vivirla, morderla ..."</i>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    Mucha gente tiene ideas, pero sólo unos pocos deciden llevarlas a cabo
                                    hoy y no mañana. No la semana que viene, <strong>SINO HOY</strong>.
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    Diciembre de 2020 fue un punto de inflexión en mi vida, al tener
                                    que superar una enfermedad grave. Esto actuó como un resorte interno
                                    dentro de mi, a decirme <i>"a qué estás esperando? no hay que demorar el
                                    viaje mas de lo necesario"</i>
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    Desde entonces estoy realizando todos esas aficiones que siempre tuve
                                    idea, pero no hacía. Empecé a dar clases de canto, hasta puedo cantar
                                    en Ucraniano, actúo como figurante en películas, motociclismo, baile
                                     y cocina también están en la lista. Mis colegas ya me dicen: <i>"... tú vives
                                    tus aficiones y lo de trabajar es un hobbie ahora"  </i>. De todas, lo que mas
                                    me enciende es viajar en moto, o como me dice mi mujer <strong>"la enfermedad del viento"</strong>.
                                </ListGroup.Item>
                            </ListGroup>    
                        </Accordion.Body>
                </Accordion.Item>   
        </Accordion>
    )
}       

export default MyHistory