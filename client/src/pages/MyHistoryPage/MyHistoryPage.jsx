import MyHistory from '../../components/MyHistory/MyHistory'
import pablo_profile from '../../assets/images/pablo_profile.jpeg'

const MyHistoryPage = () => {
    return (
        <>
            <img src={pablo_profile} />
            <br/>
            <MyHistory />
        </>
       
    )
}

export default MyHistoryPage