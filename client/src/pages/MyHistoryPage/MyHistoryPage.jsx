import MyHistory from '../../components/MyHistory/MyHistory'
import pablo_profile from '../../assets/images/pablo_profile.jpeg'
import { Row, Col } from 'react-bootstrap'

const MyHistoryPage = () => {
    return (
        <div className="My-History" >
            <Row>
                <Col sm={3}>
                    <img src={pablo_profile} />
                </Col>
                <Col sm={9}>
                    <MyHistory />
               </Col>        
            </Row>
        </div>
       
    )
}

export default MyHistoryPage