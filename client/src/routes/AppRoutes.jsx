import { Routes, Route } from 'react-router-dom'
import HomePage from './../pages/HomePage/HomePage'
import MyHistoryPage from './../pages/MyHistoryPage/MyHistoryPage'
import ChannelsPage from './../pages/ChannelsPage/ChannelsPage'
import TripRoutesPage from './../pages/TripRoutesPage/TripRoutesPage'
import ErrorPage from './../pages/ErrorPage/ErrorPage'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/my-history" element={<MyHistoryPage />}/>
            <Route path="/channels" element={<ChannelsPage />}/>
            <Route path="/trip-routes" element={<TripRoutesPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}
export default AppRoutes;